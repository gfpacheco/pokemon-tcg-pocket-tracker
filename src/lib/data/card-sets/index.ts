import { CardSetName } from '../types';
import { geneticApex } from './genetic-apex';
import { mythicalIsland } from './mythical-island';
import { spaceTimeSmackdown } from './space-time-smackdown';

export const cardSets = [spaceTimeSmackdown, mythicalIsland, geneticApex];

export const cardsCountBySet: Record<CardSetName, number> = {
  [CardSetName.GeneticApex]: geneticApex.cards.length,
  [CardSetName.MythicalIsland]: mythicalIsland.cards.length,
  [CardSetName.SpaceTimeSmackdown]: spaceTimeSmackdown.cards.length,
};
