import { NextResponse } from 'next/server';

interface SessionBody {
  accessToken?: string;
  refreshToken?: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SessionBody;
    const { accessToken, refreshToken } = body;

    if (!accessToken || !refreshToken) {
      return NextResponse.json(
        { message: 'Missing required tokens.' },
        { status: 400 },
      );
    }

    const isProduction = process.env.NODE_ENV === 'production';
    const response = NextResponse.json({ message: 'Session created successfully.' });

    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 30 * 60,
      path: '/',
    });

    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 60 * 60 * 24 * 30,
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
