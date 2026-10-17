import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const res = await fetch(`${process.env.BASE_URL_SERVER}/auth/check-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json(
      { message:"The entered code is invalid." },
      { status: 400 }
    );
  }

  const data = await res.json();
  const { accessToken, refreshToken } = data;
  const response = NextResponse.json({ success: true });
  response.cookies.set("accessToken", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
  response.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  });
  return response;
}
