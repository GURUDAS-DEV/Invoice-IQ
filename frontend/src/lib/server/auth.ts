import crypto from "crypto";
import jwt, { type JwtPayload } from "jsonwebtoken";

export type RefreshPayload = JwtPayload & {
  userId: string;
  username: string;
  email: string;
  type: "refresh";
};

const getRefreshSecret = (): string => {
  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
  if (!refreshTokenSecret) {
    throw new Error("REFRESH_TOKEN_SECRET must be configured.");
  }

  return refreshTokenSecret;
};

export const hashString = (value: string): string => {
  return crypto.createHash("sha256").update(value).digest("hex");
};

export const generateRefreshToken = (userId: string, userName: string, email: string): string => {
  return jwt.sign(
    {
      userId,
      username: userName,
      email,
      type: "refresh",
    },
    getRefreshSecret(),
    { expiresIn: "40d" },
  );
};

export const verifyRefreshToken = (token: string): RefreshPayload => {
  const decoded = jwt.verify(token, getRefreshSecret());

  if (
    typeof decoded === "string" ||
    decoded.type !== "refresh" ||
    typeof decoded.userId !== "string" ||
    typeof decoded.username !== "string" ||
    typeof decoded.email !== "string"
  ) {
    throw new Error("Invalid refresh token payload.");
  }

  return decoded as RefreshPayload;
};
