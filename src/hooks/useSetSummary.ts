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
    const cardsOwnedCountByRarity: Partial<Record<CardRarity, number>> = {};
    const cardsOwnedCountByPack: Partial<Record<CardPackName, number>> = {};
    const cardsCountByPack = {} as Record<CardPackName, number>;

    for (const cardId of setCardsOwned) {
      const card = cardSet.cards.find((c) => c.id === cardId);
      if (card) {
        if (card.rarity) {
          cardsOwnedCountByRarity[card.rarity] =
            (cardsOwnedCountByRarity[card.rarity] ?? 0) + 1;
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
      cardsCountByRarity: cardSet.cardsByRarity,
      cardsOwnedCountByRarity,
      cardsCountByPack,
      cardsOwnedCountByPack,
    };
  }, [cardSet.cards, cardSet.cardsByRarity, cardsOwned]);
}
