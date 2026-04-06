import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const cookieStore = await cookies();

  const body = await req.json();
console.log(body);

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری خود شوید" },
      { status: 401 }
    );
  }

  try {
    const res = await fetch(`${process.env.BASE_URL_SERVER}/order`, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`,"Content-Type":" application/json " },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: "مشکلی پیش آمده است" },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.log("erre",error);
    
    return NextResponse.json(
      { error: "خطا در برقراری ارتباط" },
      { status: 500 }
    );
  }
}
