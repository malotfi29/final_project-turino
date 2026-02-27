import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;
  if (!refreshToken) {
    return NextResponse.json(
      { message: "لطفا وارد حساب کاربری خود شوید" },
      { status: 401 }
    );
  }
  try {
    const res = await fetch(
      `${process.env.BASE_URL_SERVER}/auth/refresh-token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(refreshToken),
      }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "خطا در برقراری ارتباط" },
      { status: 500 }
    );
  }
}
