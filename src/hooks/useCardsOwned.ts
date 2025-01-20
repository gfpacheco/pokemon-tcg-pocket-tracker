import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cardsOwned';

export function useCardsOwned() {
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

  return [cardsOwned, setCardsOwned] as const;
}
