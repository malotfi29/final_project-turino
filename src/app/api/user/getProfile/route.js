import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore =await cookies();

  const accessToken =cookieStore.get("accessToken")?.value;


  if (!accessToken) {
    return NextResponse.json(
      { message: "Please log in to your account." },
      { status: 401 }
    );
  }

  try {
    const res = await fetch(`${process.env.BASE_URL_SERVER}/user/profile`
      , {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }

    return NextResponse.json({ user: data });

  } catch (error) {
    return NextResponse.json(
      { message: "خطا در برقراری ارتباط" },
      { status: 500 }
    );
  }
}
