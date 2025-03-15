import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cardsOwned';

import { createContext, useContext } from 'react';

interface CardsOwnedContext {
  cardsOwned: Record<string, boolean>;
  updateCardsOwned: (cards: Record<string, boolean>) => void;
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
  const [cardsOwned, setCardsOwned] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const cardsOwned = localStorage.getItem(STORAGE_KEY);
    if (cardsOwned) {
      setCardsOwned(JSON.parse(cardsOwned));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cardsOwned));
  }, [cardsOwned]);

  function updateCardsOwned(updatedCardsOwned: Record<string, boolean>) {
    setCardsOwned((prev) => {
      const newCardsOwned = { ...prev, ...updatedCardsOwned };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newCardsOwned));
      return newCardsOwned;
    });
  }

  return (
    <Context.Provider value={{ cardsOwned, updateCardsOwned }}>
      {children}
    </Context.Provider>
  );
}
