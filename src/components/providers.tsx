'use client';

import { ApiProvider } from '@/hooks/useApi';
import { CardsOwnedProvider } from '@/hooks/useCardsOwned';

export type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ApiProvider>
      <CardsOwnedProvider>{children}</CardsOwnedProvider>
    </ApiProvider>
  );
}
