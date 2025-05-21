import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Voice Interface',
  description: 'A modern voice interface with Tron-inspired design',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black relative overflow-hidden`}>
        {/* City grid floor */}
        <div className="fixed inset-0 bg-[linear-gradient(90deg,_transparent_0%,_rgba(0,195,255,0.05)_50%,_transparent_100%)] bg-[length:200px_200px]" />
        <div className="fixed inset-0 bg-[linear-gradient(0deg,_transparent_0%,_rgba(0,195,255,0.05)_50%,_transparent_100%)] bg-[length:200px_200px]" />
        
        {/* Perspective grid lines */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_transparent_0%,_rgba(0,195,255,0.1)_50%,_transparent_100%)] bg-[length:400px_400px] animate-[gridMove_40s_linear_infinite]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_0%,_rgba(0,195,255,0.1)_50%,_transparent_100%)] bg-[length:400px_400px] animate-[gridMove_40s_linear_infinite]" />
        </div>

        {/* City buildings */}
        <div className="fixed inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 bg-gradient-to-t from-[#00c3ff] to-transparent animate-[glow_4s_ease-in-out_infinite]"
              style={{
                left: `${i * 5}%`,
                width: `${Math.random() * 3 + 2}%`,
                height: `${Math.random() * 40 + 20}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Glowing accents */}
        <div className="fixed top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#00c3ff] to-transparent opacity-5 blur-3xl" />
        <div className="fixed bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#00c3ff] to-transparent opacity-5 blur-3xl" />

        {/* Light trails */}
        <div className="fixed inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00c3ff] to-transparent animate-[trail_6s_linear_infinite]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 200}px`,
                opacity: Math.random() * 0.3,
                animationDelay: `${Math.random() * 6}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="fixed inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-[#00c3ff] rounded-full animate-[float_4s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                opacity: Math.random() * 0.5,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative min-h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
