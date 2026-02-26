import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const originId = searchParams.get("originId");
    const destinationId = searchParams.get("destinationId");
    const startDate = searchParams.get("startDate");
  
    const endDate = searchParams.get("endDate");
  

    const params = new URLSearchParams();

    if (originId) params.append("originId", originId);
    if (destinationId) params.append("destinationId", destinationId);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate",endDate);



    const res = await fetch(
      `${process.env.BASE_URL_SERVER}/tour?${params.toString()}`,
      
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
