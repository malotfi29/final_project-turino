import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json(
      { message: "Please log in to your account." },
      { status: 401 }
    );
  }

  try {
    const res = await fetch(
      `${process.env.BASE_URL_SERVER}/auth/refresh-token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { message: "Invalid token."},
        { status: 400 }
      );
    }

    const data = await res.json();

    const { accessToken } = data;
    const response = NextResponse.json({ status: 200 });
    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Connection error." },
      { status: 500 }
    );
  }
}
