import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

// Token payload interface
interface TokenPayload extends JwtPayload {
    userId: string;
    username: string;
    email: string;
    type: "access" | "refresh";
}

// Extend Express Request to include userId
declare global {
    namespace Express {
        interface Request {
            userId?: string;
            userName?: string;
            email?: string;
        }
    }
}

const isProduction = process.env.NODE_ENV === "production";

const cookieOptions = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax" as const,
    path: "/"
};

const getJwtSecrets = (): { refreshTokenSecret: string } => {
    const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET!;

    if (!refreshTokenSecret) {
        throw new Error("REFRESH_TOKEN_SECRET must be configured.");
    }

    return { refreshTokenSecret };
};


const isTokenPayload = (payload: JwtPayload | string, expectedType: TokenPayload["type"]): payload is TokenPayload => {
    if (typeof payload === "string") {
        return false;
    }

    return (
        typeof payload.userId === "string" &&
        typeof payload.username === "string" &&
        typeof payload.email === "string" &&
        payload.type === expectedType
    );
};

const attachAuthenticatedUser = (req: Request, payload: TokenPayload): void => {
    req.userId = String(payload.userId);
    req.userName = payload.username;
    req.email = payload.email;
};

const getTokenFromCookie = (token: unknown): string | null => {
    if (typeof token !== "string") {
        return null;
    }

    const normalizedToken = token.trim();
    return normalizedToken.length > 0 ? normalizedToken : null;
};

export const authMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {
    try {
        const { refreshToken } = req.cookies;
        const refreshTokenValue = getTokenFromCookie(refreshToken);
        const { refreshTokenSecret } = getJwtSecrets();

        if (!refreshTokenValue) {
            res.clearCookie("accessToken", cookieOptions);
            res.clearCookie("refreshToken", cookieOptions);
            return res.status(401).json({ message: "Authentication required. Please log in." });
        }

        const decodedRefresh = jwt.verify(refreshTokenValue, refreshTokenSecret);

        if (!isTokenPayload(decodedRefresh, "refresh")) {
            res.clearCookie("refreshToken", cookieOptions);
            return res.status(401).json({ message: "Invalid refresh token. Please log in again." });
        }

        attachAuthenticatedUser(req, decodedRefresh);
        return next();
    } catch (error: any) {
        if (error?.name === "TokenExpiredError" || error?.name === "JsonWebTokenError" || error?.name === "NotBeforeError") {
      
            res.clearCookie("refreshToken", cookieOptions);
            return res.status(401).json({
                message: "Invalid or expired token. Please log in again."
            });
        }

        return res.status(500).json({
            message: "Authentication middleware error.",
            error: error?.message || "Unknown error"
        });
    }
};
