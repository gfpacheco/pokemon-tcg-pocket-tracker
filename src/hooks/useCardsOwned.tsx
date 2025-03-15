import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'cardsOwned';

import { useAuth } from '@clerk/nextjs';
import { createContext, useContext } from 'react';
import { useApi } from './useApi';

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
  const lastSavedCardsOwned = useRef<Record<string, boolean>>({});
  const { api } = useApi();
  const { isSignedIn } = useAuth();
  const lastSignedIn = useRef<boolean | undefined>(isSignedIn);

  useEffect(() => {
    if (lastSignedIn.current && !isSignedIn) {
      // delete data on sign out
      setCardsOwned({});
      localStorage.removeItem(STORAGE_KEY);
      lastSavedCardsOwned.current = {};
    }

    lastSignedIn.current = isSignedIn;
  }, [isSignedIn]);

  useEffect(() => {
    const localStorageData = localStorage.getItem(STORAGE_KEY);

    if (localStorageData) {
      setCardsOwned(JSON.parse(localStorageData));
    }

    api.getCardsOwned().then((cardsOwned) => {
      if (cardsOwned) {
        setCardsOwned(cardsOwned);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cardsOwned));
        lastSavedCardsOwned.current = cardsOwned;
      }
    });
  }, [api]);

  function updateCardsOwned(cardsOwned: Record<string, boolean>) {
    setCardsOwned(cardsOwned);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cardsOwned));

    const changedCards: Record<string, boolean> = {};

    Object.keys(cardsOwned)
      .filter((key) => cardsOwned[key] && !lastSavedCardsOwned.current[key])
      .forEach((key) => (changedCards[key] = true));

    Object.keys(lastSavedCardsOwned.current)
      .filter((key) => lastSavedCardsOwned.current[key] && !cardsOwned[key])
      .forEach((key) => (changedCards[key] = false));

    api.updateCardsOwned(changedCards).then(() => {
      lastSavedCardsOwned.current = cardsOwned;
    });
  }

  return (
    <Context.Provider value={{ cardsOwned, updateCardsOwned }}>
      {children}
    </Context.Provider>
  );
}
