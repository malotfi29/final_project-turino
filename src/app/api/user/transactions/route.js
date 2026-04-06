import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "لطفا وارد حساب کاربری خود شوید" },
      { status: 401 }
    );
  }

  try {
    const res = await fetch(`${process.env.BASE_URL_SERVER}/user/transactions`, {
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
     
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
