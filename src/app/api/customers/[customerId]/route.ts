import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { customerId: string } }
) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.customerId}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to fetch customer" },
      { status: 500 }
    );
  }
}
