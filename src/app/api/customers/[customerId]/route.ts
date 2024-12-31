import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ customerId: string }> }
): Promise<NextResponse> {
  const { customerId } = await params;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${customerId}`
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
