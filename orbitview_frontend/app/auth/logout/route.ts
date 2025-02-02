import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Clear authentication cookie/token
    const response = NextResponse.json(
      { success: true, message: "Logged out successfully" },
      { status: 200 }
    );

    // Clear the auth cookie
    response.cookies.delete("auth-token");

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to logout" },
      { status: 500 }
    );
  }
}