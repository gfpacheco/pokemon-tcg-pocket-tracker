'use client';

import { CardsOwnedProvider } from '@/hooks/useCardsOwned';

export type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <CardsOwnedProvider>{children}</CardsOwnedProvider>;
}
