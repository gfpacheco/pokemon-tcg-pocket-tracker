import { cn } from '@/lib/utils';
import { ClerkProvider, UserButton } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Icon from './icon.svg';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pokémon TCG Pocket Tracker',
  description: 'Maximize your chances of getting a new card!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'bg-background antialiased',
            geistSans.variable,
            geistMono.variable,
          )}
        >
          <header className="border-b bg-card">
            <div className="container h-16 px-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icon className="w-8 h-8 inline-block" />
                <h1 className="text-xl font-bold">
                  Pokémon TCG Pocket Tracker
                </h1>
              </div>
              <UserButton />
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
