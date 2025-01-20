import { CardSetName } from '../types';
import { geneticApex } from './genetic-apex';
import { mythicalIsland } from './mythical-island';

export const cardSets = [mythicalIsland, geneticApex];

export const cardsCountBySet: Partial<Record<CardSetName, number>> = {
  [CardSetName.GeneticApex]: geneticApex.cards.length,
  [CardSetName.MythicalIsland]: mythicalIsland.cards.length,
};
