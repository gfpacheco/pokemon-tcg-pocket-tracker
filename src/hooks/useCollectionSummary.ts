import { cardSets } from '@/lib/data/card-sets';
import { promos } from '@/lib/data/promos';
import { CardPackName, CardRarity } from '@/lib/data/types';
import { useMemo } from 'react';
import { useCardsOwned } from './useCardsOwned';

const allCards = cardSets.flatMap((set) => set.cards).concat(promos);

export function useCollectionSummary() {
  const { cardsOwned } = useCardsOwned();

  return useMemo(() => {
    const cardsOwnedCount = cardsOwned.length;
    const cardsOwnedCountByRarity = {
      [CardRarity.Diamond1]: 0,
      [CardRarity.Diamond2]: 0,
      [CardRarity.Diamond3]: 0,
      [CardRarity.Diamond4]: 0,
      [CardRarity.Star1]: 0,
      [CardRarity.Star2]: 0,
      [CardRarity.Star3]: 0,
      [CardRarity.Crown1]: 0,
    };
    const cardsOwnedCountByPack: Partial<Record<CardPackName, number>> = {};
    const cardsCountByPack: Partial<Record<CardPackName, number>> = {};

    for (const cardId of cardsOwned) {
      const card = allCards.find((c) => c.id === cardId);
      if (card) {
        if (card.rarity) {
          cardsOwnedCountByRarity[card.rarity] += 1;
        }

        for (const pack of card.packs) {
          cardsOwnedCountByPack[pack] = (cardsOwnedCountByPack[pack] ?? 0) + 1;
        }
      }
    }

    for (const card of allCards) {
      for (const pack of card.packs) {
        cardsCountByPack[pack] = (cardsCountByPack[pack] ?? 0) + 1;
      }
    }

    return {
      cardsCount: allCards.length,
      cardsOwnedCount,
      cardsOwnedCountByRarity,
      cardsOwnedCountByPack,
      cardsCountByPack,
    };
  }, [cardsOwned]);
}
