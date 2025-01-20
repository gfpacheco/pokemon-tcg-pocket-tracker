import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cardsOwned';

import { createContext, useContext } from 'react';

interface CardsOwnedContext {
  cardsOwned: string[];
  updateCardOwned: (cardId: string, isOwned: boolean) => void;
}

const Context = createContext<CardsOwnedContext | null>(null);

export const useCardsOwned = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useCardsOwned must be used within a CardsOwnedProvider');
  }
  return context;
};

export type CardsOwnedProviderProps = {
  children: React.ReactNode;
};

export function CardsOwnedProvider({ children }: CardsOwnedProviderProps) {
  const [cardsOwned, setCardsOwned] = useState<string[]>([]);

  useEffect(() => {
    const cardsOwned = localStorage.getItem(STORAGE_KEY);
    if (cardsOwned) {
      setCardsOwned(JSON.parse(cardsOwned));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cardsOwned));
  }, [cardsOwned]);

  function updateCardOwned(cardId: string, isOwned: boolean) {
    setCardsOwned((prev) => {
      if (isOwned) {
        return [...prev, cardId];
      }
      return prev.filter((id) => id !== cardId);
    });
  }

  return (
    <Context.Provider value={{ cardsOwned, updateCardOwned }}>
      {children}
    </Context.Provider>
  );
}
