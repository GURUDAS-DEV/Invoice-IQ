import { NextRequest, NextResponse } from "next/server";
import { getGoogleRedirectUri } from "@/lib/server/auth-config";

export const runtime = "nodejs";

const clientId = process.env.GOOGLE_CLIENT_ID;

const buildResponse = (request: NextRequest): NextResponse => {
  if (!clientId) {
    return NextResponse.json({ message: "GOOGLE_CLIENT_ID is not configured." }, { status: 500 });
  }

  const redirectUri = getGoogleRedirectUri(request);
  const googleOAuthURL = "https://accounts.google.com/o/oauth2/v2/auth";
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: "openid email profile",
    access_type: "offline",
    prompt: "consent",
  });

  return NextResponse.json({
    message: "URL Generated Successfully",
    url: `${googleOAuthURL}?${params.toString()}`,
  });
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  return buildResponse(request);
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  return buildResponse(request);
}
