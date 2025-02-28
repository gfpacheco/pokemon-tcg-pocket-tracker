import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Icon from './icon.svg';

import { NavLink } from '@/components/nav-link';
import { Providers } from '@/components/providers';

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
      <Providers>
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
                  <h1 className="text-xl font-bold md:block hidden">
                    Pokémon TCG Pocket Tracker
                  </h1>
                </div>
                <nav className="self-stretch flex gap-4">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/collection">My Collection</NavLink>
                </nav>
                <SignedOut>
                  <SignInButton>
                    <Button>
                      Sign in
                      <span className="hidden md:block">
                        {' '}
                        to sync your collection across devices
                      </span>
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </header>
            {children}
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
