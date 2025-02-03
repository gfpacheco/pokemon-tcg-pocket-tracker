import { allCards, allCardsByRarity } from '@/lib/data/all-cards';
import { cardsCountBySet } from '@/lib/data/card-sets';
import { promo } from '@/lib/data/promo';
import { CardRarity, CardSetName } from '@/lib/data/types';
import { useMemo } from 'react';
import { useCardsOwned } from './useCardsOwned';

export function useCollectionSummary() {
  const { cardsOwned } = useCardsOwned();

  return useMemo(() => {
    const cardsOwnedCount = cardsOwned.length;
    const cardsOwnedCountByRarity: Partial<Record<CardRarity, number>> = {};
    const cardsOwnedCountBySet: Partial<Record<CardSetName, number>> = {};
    let promoCardsOwnedCount = 0;

    for (const cardId of cardsOwned) {
      const card = allCards.find((c) => c.id === cardId);
      if (card) {
        if (card.rarity) {
          cardsOwnedCountByRarity[card.rarity] =
            (cardsOwnedCountByRarity[card.rarity] ?? 0) + 1;
        } else {
          promoCardsOwnedCount += 1;
        }

        if (card.set) {
          cardsOwnedCountBySet[card.set] =
            (cardsOwnedCountBySet[card.set] ?? 0) + 1;
        }
      }
    }

    return {
      cardsCount: allCards.length,
      cardsOwnedCount,
      cardsCountByRarity: allCardsByRarity,
      cardsOwnedCountByRarity,
      cardsCountBySet,
      cardsOwnedCountBySet,
      promoCardsCount: promo.length,
      promoCardsOwnedCount,
    };
  }, [cardsOwned]);
}
