import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "@/lib/server/db";
import { hashString } from "@/lib/server/auth";
import { UserModel } from "@/lib/server/models/user.model";
import { getCookieDeletionOptions } from "@/lib/server/auth-config";

export const runtime = "nodejs";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const refreshToken = request.cookies.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json({ message: "User is already Logged Out!!" }, { status: 400 });
    }

    await connectMongo();
    const hashedRefreshToken = hashString(refreshToken);
    const user = await UserModel.findOne({ refreshToken: hashedRefreshToken });

    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    const response = NextResponse.json({ message: "User logged out successfully!" });
    response.cookies.delete("refreshToken");
    response.cookies.set("refreshToken", "", {
      ...getCookieDeletionOptions(),
      maxAge: 0,
    });
    return response;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Internal server error", error: message },
      { status: 500 },
    );
  }
}
