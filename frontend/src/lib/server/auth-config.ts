import type { NextRequest } from "next/server";

export const isProduction = process.env.NODE_ENV === "production";

export const getRefreshCookieOptions = () => ({
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? ("none" as const) : ("lax" as const),
  path: "/",
  maxAge: 40 * 24 * 60 * 60,
});

export const getCookieDeletionOptions = () => ({
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? ("none" as const) : ("lax" as const),
  path: "/",
});

export const getGoogleRedirectUri = (request: NextRequest): string => {
  const configured = process.env.GOOGLE_REDIRECT_URI;
  if (configured && configured.trim().length > 0) {
    return configured.trim();
  }

  const callbackUrl = new URL("/api/auth/google/callback", request.url);
  return callbackUrl.toString();
};
