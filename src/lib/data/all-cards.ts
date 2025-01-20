import { cardSets } from './card-sets';
import { promo } from './promo';
import { CardRarity } from './types';

export const allCards = cardSets.flatMap((set) => set.cards).concat(promo);

export const allCardsByRarity = allCards.reduce((acc, card) => {
  if (card.rarity) {
    acc[card.rarity] = (acc[card.rarity] ?? 0) + 1;
  }

  return acc;
}, {} as Record<CardRarity, number>);
