import { CardPackName, CardRarity, CardSet } from '@/lib/data/types';
import { useMemo } from 'react';
import { useCardsOwned } from './useCardsOwned';

export function useSetSummary(cardSet: CardSet) {
  const { cardsOwned } = useCardsOwned();

  return useMemo(() => {
    const setCardsOwned = cardsOwned.filter((cardId) =>
      cardSet.cards.some((c) => c.id === cardId),
    );
    const cardsOwnedCount = setCardsOwned.length;
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

    for (const cardId of setCardsOwned) {
      const card = cardSet.cards.find((c) => c.id === cardId);
      if (card) {
        if (card.rarity) {
          cardsOwnedCountByRarity[card.rarity] += 1;
        }

        for (const pack of card.packs) {
          cardsOwnedCountByPack[pack] = (cardsOwnedCountByPack[pack] ?? 0) + 1;
        }
      }
    }

    for (const card of cardSet.cards) {
      for (const pack of card.packs) {
        cardsCountByPack[pack] = (cardsCountByPack[pack] ?? 0) + 1;
      }
    }

    return {
      cardsCount: cardSet.cards.length,
      cardsOwnedCount,
      cardsOwnedCountByRarity,
      cardsOwnedCountByPack,
      cardsCountByPack,
    };
  }, [cardSet.cards, cardsOwned]);
}
