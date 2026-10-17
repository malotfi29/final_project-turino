import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const cookieStore = await cookies();
  const data = await req.json();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { message: "Please log in to your account." },
      { status: 401 }
    );
  }

  try {
    const res = await fetch(`${process.env.BASE_URL_SERVER}/user/profile`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${accessToken}`,"Content-Type":" application/json "},
      body: JSON.stringify(data),
    });

    if (res.status === 401) {
      return NextResponse.json(
        { message: "Please log in to your account." },
        { status: 401 }
      );
    }

    const user = await res.json();
    

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message:"Connection error." },
      { status: 500 }
    );
  }
}
