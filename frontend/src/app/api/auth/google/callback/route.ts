import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "@/lib/server/db";
import { UserModel } from "@/lib/server/models/user.model";
import { generateRefreshToken, hashString } from "@/lib/server/auth";
import { getGoogleRedirectUri, getRefreshCookieOptions } from "@/lib/server/auth-config";

export const runtime = "nodejs";

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

type GoogleTokenResponse = {
  id_token?: string;
  error?: string;
  error_description?: string;
};

type GoogleIdTokenPayload = {
  email?: string;
  name?: string;
  picture?: string;
};

const decodeIdTokenPayload = (idToken: string): GoogleIdTokenPayload => {
  const parts = idToken.split(".");
  if (parts.length < 2) {
    throw new Error("Invalid Google id_token format.");
  }

  const base64url = parts[1];
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  return JSON.parse(Buffer.from(padded, "base64").toString("utf-8")) as GoogleIdTokenPayload;
};

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { message: "Google OAuth environment variables are missing." },
        { status: 500 },
      );
    }

    const code = request.nextUrl.searchParams.get("code");
    if (!code) {
      return NextResponse.json(
        { message: "Authorization code is missing from query parameters." },
        { status: 400 },
      );
    }

    const redirectUri = getGoogleRedirectUri(request);

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    const tokenData = (await tokenRes.json()) as GoogleTokenResponse;
    if (!tokenRes.ok || tokenData.error || !tokenData.id_token) {
      return NextResponse.json(
        {
          message: "Failed to exchange code for tokens",
          error: tokenData.error_description || tokenData.error || "Unknown error",
        },
        { status: 400 },
      );
    }

    const payload = decodeIdTokenPayload(tokenData.id_token);
    const email = payload.email;
    const name = payload.name;
    const picture = payload.picture;

    if (!email || !name || !picture) {
      return NextResponse.json(
        { message: "Google response is missing required profile fields." },
        { status: 400 },
      );
    }

    await connectMongo();

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create({
        userName: name,
        email,
        avatar: picture,
        loginMode: "Google",
      });
    }

    const refreshToken = generateRefreshToken(user._id.toString(), user.userName, user.email);
    user.refreshToken = hashString(refreshToken);
    await user.save();

    const redirectTarget = new URL("/home", request.url);
    const response = NextResponse.redirect(redirectTarget);

    response.cookies.set("refreshToken", refreshToken, getRefreshCookieOptions());

    return response;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error during Google authentication:", error);
    return NextResponse.json(
      { message: "Internal server error", error: message },
      { status: 500 },
    );
  }
}
