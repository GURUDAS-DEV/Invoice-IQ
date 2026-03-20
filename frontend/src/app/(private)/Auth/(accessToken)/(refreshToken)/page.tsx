import { cookies } from 'next/headers';
import LoginLoader from './LoginLoader';

interface Props {
  params: {
    accessToken: string;
    refreshToken: string;
  };
}

export default async function AuthPage({ params }: Props) {
  const { accessToken, refreshToken } = params;

  // Get cookies instance
  const cookieStore = await cookies();

  // Set access token as HTTP-only cookie
  if (accessToken) {
    cookieStore.set('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 30 * 60, // 30 minutes
      path: '/',
    });
  }

  // Set refresh token as HTTP-only cookie
  if (refreshToken) {
    cookieStore.set('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
  }

  return <LoginLoader />;
}
