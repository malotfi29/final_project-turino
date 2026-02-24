import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.BASE_URL_SERVER}/tour`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در دریافت تورها" },
      { status: 500 }
    );
  }
}