import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "@/lib/server/db";
import { verifyRefreshToken, hashString } from "@/lib/server/auth";
import { UserModel } from "@/lib/server/models/user.model";

export const runtime = "nodejs";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const refreshToken = request.cookies.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json({ message: "Authentication required. Please log in." }, { status: 401 });
    }

    const decoded = verifyRefreshToken(refreshToken);
    await connectMongo();

    const user = await UserModel.findOne({
      _id: decoded.userId,
      refreshToken: hashString(refreshToken),
    }).lean();

    if (!user) {
      return NextResponse.json({ message: "Invalid or expired session." }, { status: 401 });
    }

    return NextResponse.json({
      userId: String(user._id),
      username: user.userName,
      email: user.email,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: "Authentication failed.", error: message }, { status: 401 });
  }
}
