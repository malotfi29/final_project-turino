import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const cookieStore = await cookies();

  const body = await req.json();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "Please log in to your account." },
      { status: 401 }
    );
  }

  try {
    const res = await fetch(`${process.env.BASE_URL_SERVER}/order`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": " application/json ",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return NextResponse.json(
        { error:"Something went wrong." },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "Connection error." },
      { status: 500 }
    );
  }
}
