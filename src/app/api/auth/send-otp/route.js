import { NextResponse } from "next/server";

export async function POST(req) {
  const mobile = await req.json();
try {
  const res = await fetch(`${process.env.BASE_URL_SERVER}/auth/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mobile)
  });
  const data = await res.json();
  return NextResponse.json(data);
} catch (error) {
  return NextResponse.json(
    { message: "Connection error. Please try again." },
    { status: 500 }
  );
}




  
}
