import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const res = await fetch(`${process.env.BASE_URL_SERVER}/auth/check-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "include",
  });
  console.log(res);
  
  const data = await res.json();
  
  return NextResponse.json(data);
}
