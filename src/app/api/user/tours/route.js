import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Please log in to your account." },
      { status: 401 }
    );
  }

  try {
    const res = await fetch(`${process.env.BASE_URL_SERVER}/user/tours`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
     
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.log("erre",error);
    
    return NextResponse.json(
      { error: "Connection error." },
      { status: 500 }
    );
  }
}
