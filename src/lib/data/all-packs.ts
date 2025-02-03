import { cardSets } from './card-sets';
import { CardPack, CardPackName } from './types';

export const allPacks = cardSets.flatMap((set) => set.packs);

export const allPacksByName = allPacks.reduce((acc, pack) => {
  acc[pack.name] = pack;
  return acc;
}, {} as Record<CardPackName, CardPack>);
