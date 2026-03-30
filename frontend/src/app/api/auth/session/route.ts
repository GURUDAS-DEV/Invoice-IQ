import { NextResponse } from 'next/server';

interface SessionBody {
  refreshToken?: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SessionBody;
    const { refreshToken } = body;

    if (!refreshToken) {
      return NextResponse.json(
        { message: 'Missing required refresh token.' },
        { status: 400 },
      );
    }

    const isProduction = process.env.NODE_ENV === 'production';
    const response = NextResponse.json({ message: 'Session created successfully.' });

    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 40 * 24 * 60 * 60,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Error creating frontend session:', error);
    return NextResponse.json(
      { message: 'Internal server error while creating session.' },
      { status: 500 },
    );
  }
}
