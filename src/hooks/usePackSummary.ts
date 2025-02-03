import { allCards } from '@/lib/data/all-cards';
import { allPacks } from '@/lib/data/all-packs';
import { cardIndices } from '@/lib/data/odds';
import { CardPack, CardPackName } from '@/lib/data/types';
import { useMemo } from 'react';
import { useCardsOwned } from './useCardsOwned';

export type PackSummary = {
  pack: CardPack;
  cardsCount: number;
  cardsOwnedCount: number;
  newCardChance: number;
};

export function usePackSummary(): PackSummary[] {
  const { cardsOwned } = useCardsOwned();

  return useMemo(() => {
    const cardsCountByPack = {} as Record<CardPackName, number>;
    const cardsOwnedCountByPack: Partial<Record<CardPackName, number>> = {};
    const cardsOwnedPercentageByPack = {} as Record<CardPackName, number>;
    const newCardChanceByPack = {} as Record<CardPackName, number>;

    for (const card of allCards) {
      for (const pack of card.packs) {
        cardsCountByPack[pack] = (cardsCountByPack[pack] ?? 0) + 1;

        if (cardsOwned.includes(card.id)) {
          cardsOwnedCountByPack[pack] = (cardsOwnedCountByPack[pack] ?? 0) + 1;
        }

        cardsOwnedPercentageByPack[pack] =
          (cardsOwnedCountByPack[pack] ?? 0) / cardsCountByPack[pack];
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

    return allPacks.map((pack) => ({
      pack,
      cardsCount: cardsCountByPack[pack.name],
      cardsOwnedCount: cardsOwnedCountByPack[pack.name] ?? 0,
      cardsOwnedPercentage: cardsOwnedPercentageByPack[pack.name],
      newCardChance: newCardChanceByPack[pack.name],
    }));
  }, [cardsOwned]);
}
