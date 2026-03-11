import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore =await cookies();

  const accessToken =cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { message: "لطفا وارد حساب کاربری خود شوید" },
      { status: 401 }
    );
  }

  try {
    const res = await fetch(`${process.env.BASE_URL_SERVER}/basket`
      , {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
    if (res.status===401) {
      return NextResponse.json(
        { message: "لطفا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    
    const basket = await res.json();
    
    return NextResponse.json({ basket });

  } catch (error) {
    return NextResponse.json(
      { message: "خطا در برقراری ارتباط" },
      { status: 500 }
    );
  }
}
