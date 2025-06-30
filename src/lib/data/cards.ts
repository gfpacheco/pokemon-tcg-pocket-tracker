import { allPacks } from './card-packs';
import { allSets } from './card-sets';
import { promo } from './promo';
import { CardPackName, CardRarity, CardSetName } from './types';

export const allCards = allSets.flatMap((set) => set.cards).concat(promo);

export const allCardsByRarity = allCards.reduce((acc, card) => {
  if (card.rarity) {
    acc[card.rarity] = (acc[card.rarity] ?? 0) + 1;
  }

  return acc;
}, {} as Record<CardRarity, number>);

export const cardsCountBySet = allSets.reduce((acc, set) => {
  acc[set.name] = set.cards.length;
  return acc;
}, {} as Record<CardSetName, number>);

export const cardsCountByPack = allPacks.reduce((acc, pack) => {
  acc[pack.name] = Object.values(pack.cardByRarity).reduce(
    (acc, rarityCount) => acc + rarityCount,
    0,
  );
  return acc;
}, {} as Record<CardPackName, number>);
