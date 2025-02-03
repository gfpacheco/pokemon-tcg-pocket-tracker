import { allCards } from '@/lib/data/all-cards';
import { allPacks } from '@/lib/data/all-packs';
import { cardIndices } from '@/lib/data/odds';
import { CardPackName } from '@/lib/data/types';
import { useMemo } from 'react';
import { useCardsOwned } from './useCardsOwned';

export function usePackSummary() {
  const { cardsOwned } = useCardsOwned();

  return useMemo(() => {
    const cardsCountByPack = {} as Record<CardPackName, number>;
    const cardsOwnedCountByPack = {} as Record<CardPackName, number>;
    const newCardChanceByPack = {} as Record<CardPackName, number>;

    for (const card of allCards) {
      for (const pack of card.packs) {
        cardsCountByPack[pack] = (cardsCountByPack[pack] ?? 0) + 1;

        if (cardsOwned.includes(card.id)) {
          cardsOwnedCountByPack[pack] = (cardsOwnedCountByPack[pack] ?? 0) + 1;
        }
      }
    }

    const notOwnedCards = allCards.filter((c) => !cardsOwned.includes(c.id));
    for (const pack of allPacks) {
      const notOwnedCardsInPack = notOwnedCards.filter((c) =>
        c.packs.includes(pack.name),
      );

      newCardChanceByPack[pack.name] = cardIndices.reduce((acc, cardIndex) => {
        const newCardOdds = notOwnedCardsInPack.reduce((acc, card) => {
          if (card.rarity) {
            return acc + pack.cardOddsByRarity[card.rarity][cardIndex];
          }

          return acc;
        }, 0);

        return acc + (1 - acc) * newCardOdds;
      }, 0);
    }

    return {
      cardsCountByPack,
      cardsOwnedCountByPack,
      newCardChanceByPack,
    };
  }, [cardsOwned]);
}
