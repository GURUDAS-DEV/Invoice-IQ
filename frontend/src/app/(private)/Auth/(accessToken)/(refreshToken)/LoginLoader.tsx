'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

interface LoginLoaderProps {
  accessToken: string;
  refreshToken: string;
}

export default function LoginLoader({
  accessToken,
  refreshToken,
}: LoginLoaderProps) {
  const router = useRouter();
  const { theme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 30;
      });
    }, 300);

    const timer = setTimeout(async () => {
      if (!accessToken || !refreshToken) {
        router.replace('/login');
        return;
      }

      try {
        const response = await fetch('/api/auth/session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accessToken, refreshToken }),
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to create session');
        }

        setProgress(100);
        setTimeout(() => {
          router.replace('/home');
        }, 300);
      } catch (error) {
        console.error('Error finalizing login session:', error);
        router.replace('/login');
      }
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [router, mounted, accessToken, refreshToken]);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div
      className={`flex justify-center items-center min-h-screen flex-col gap-8 transition-colors duration-500 ${
        isDark
          ? 'bg-linear-to-br from-slate-950 via-slate-900 to-blue-950'
          : 'bg-linear-to-br from-blue-50 via-white to-blue-100'
      }`}
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-400`}
      ></div>

      {/* Logo/Brand Section */}
      <div className="mb-4">
        <div className={`text-4xl font-bold bg-linear-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent`}>
          Invoice IQ
        </div>
      </div>

      {/* Main Loading Container */}
      <div
        className={`relative w-20 h-20 mb-6 ${
          isDark ? 'drop-shadow-2xl' : 'drop-shadow-lg'
        }`}
      >
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-blue-400 animate-spin" style={{ animationDuration: '2s' }}></div>

        {/* Middle rotating ring */}
        <div
          className="absolute inset-2 rounded-full border-3 border-transparent border-b-cyan-400 border-l-cyan-400 animate-spin"
          style={{ animationDuration: '3s', animationDirection: 'reverse' }}
        ></div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"></div>
        </div>
      </div>

      {/* Status Text */}
      <div className="text-center space-y-3">
        <h1
          className={`text-4xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Authenticating
        </h1>
        <p
          className={`text-lg ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Securing your session...
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 mt-6">
        <div
          className={`h-1 rounded-full overflow-hidden ${
            isDark ? 'bg-slate-700' : 'bg-blue-200'
          }`}
        >
          <div
            className="h-full bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Animated dots */}
      <div className="flex gap-3 mt-8">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-2.5 h-2.5 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce"
            style={{
              animationDelay: `${index * 0.15}s`,
              animationDuration: '1.2s',
            }}
          ></div>
        ))}
      </div>

      {/* Bottom accent */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-50`}
      ></div>
    </div>
  );
}
