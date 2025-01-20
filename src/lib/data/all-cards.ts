import { cardSets } from './card-sets';
import { promos } from './promos';
import { CardRarity } from './types';

export const allCards = cardSets.flatMap((set) => set.cards).concat(promos);

export const allCardsByRarity = allCards.reduce((acc, card) => {
  if (card.rarity) {
    acc[card.rarity] = (acc[card.rarity] ?? 0) + 1;
  }

  return acc;
}, {} as Record<CardRarity, number>);
