import LoginLoader from './LoginLoader';

interface Props {
  params: {
    accessToken: string;
    refreshToken: string;
  };
}

export default async function AuthPage({ params }: Props) {
  const { accessToken, refreshToken } = params;
  return <LoginLoader accessToken={accessToken} refreshToken={refreshToken} />;
}
