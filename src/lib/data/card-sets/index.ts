import { CardSetName } from '../types';
import { geneticApex } from './genetic-apex';
import { mythicalIsland } from './mythical-island';
import { spaceTimeSmackdown } from './space-time-smackdown';
import { triumphantLight } from './triumphant-light';

export const cardSets = [
  triumphantLight,
  spaceTimeSmackdown,
  mythicalIsland,
  geneticApex,
];

export const cardsCountBySet: Record<CardSetName, number> = {
  [CardSetName.GeneticApex]: geneticApex.cards.length,
  [CardSetName.MythicalIsland]: mythicalIsland.cards.length,
  [CardSetName.SpaceTimeSmackdown]: spaceTimeSmackdown.cards.length,
  [CardSetName.TriumphantLight]: triumphantLight.cards.length,
};
