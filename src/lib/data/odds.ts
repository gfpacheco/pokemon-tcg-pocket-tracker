import { CardRarity } from '@/lib/data/types';

const regularOdds = {
  [CardRarity.Diamond1]: [1.0, 1.0, 1.0, 0.0, 0.0],
  [CardRarity.Diamond2]: [0.0, 0.0, 0.0, 0.9, 0.6],
  [CardRarity.Diamond3]: [0.0, 0.0, 0.0, 0.05, 0.2],
  [CardRarity.Diamond4]: [0.0, 0.0, 0.0, 0.01666, 0.06664],
  [CardRarity.Star1]: [0.0, 0.0, 0.0, 0.02572, 0.10288],
  [CardRarity.Star2]: [0.0, 0.0, 0.0, 0.005, 0.02],
  [CardRarity.Star3]: [0.0, 0.0, 0.0, 0.00222, 0.00888],
  [CardRarity.Crown1]: [0.0, 0.0, 0.0, 0.0004, 0.0016],
};

const rareOdds = {
  [CardRarity.Diamond1]: [0, 0, 0, 0, 0],
  [CardRarity.Diamond2]: [0, 0, 0, 0, 0],
  [CardRarity.Diamond3]: [0, 0, 0, 0, 0],
  [CardRarity.Diamond4]: [0, 0, 0, 0, 0],
  [CardRarity.Star1]: [0.42105, 0.42105, 0.42105, 0.42105, 0.42105],
  [CardRarity.Star2]: [0.47368, 0.47368, 0.47368, 0.47368, 0.47368],
  [CardRarity.Star3]: [0.05263, 0.05263, 0.05263, 0.05263, 0.05263],
  [CardRarity.Crown1]: [0.05263, 0.05263, 0.05263, 0.05263, 0.05263],
};

const rarePackOdds = 0.0005;

const regularPackOdds = 1 - rarePackOdds;

function calculateOdds(rarity: CardRarity, cardIndex: number) {
  return (
    regularOdds[rarity][cardIndex] * regularPackOdds +
    rareOdds[rarity][cardIndex] * rarePackOdds
  );
}

export const cardIndices = [0, 1, 2, 3, 4];

export const odds = {
  [CardRarity.Diamond1]: cardIndices.map((cardIndex) =>
    calculateOdds(CardRarity.Diamond1, cardIndex),
  ),
  [CardRarity.Diamond2]: cardIndices.map((cardIndex) =>
    calculateOdds(CardRarity.Diamond2, cardIndex),
  ),
  [CardRarity.Diamond3]: cardIndices.map((cardIndex) =>
    calculateOdds(CardRarity.Diamond3, cardIndex),
  ),
  [CardRarity.Diamond4]: cardIndices.map((cardIndex) =>
    calculateOdds(CardRarity.Diamond4, cardIndex),
  ),
  [CardRarity.Star1]: cardIndices.map((cardIndex) =>
    calculateOdds(CardRarity.Star1, cardIndex),
  ),
  [CardRarity.Star2]: cardIndices.map((cardIndex) =>
    calculateOdds(CardRarity.Star2, cardIndex),
  ),
  [CardRarity.Star3]: cardIndices.map((cardIndex) =>
    calculateOdds(CardRarity.Star3, cardIndex),
  ),
  [CardRarity.Crown1]: cardIndices.map((cardIndex) =>
    calculateOdds(CardRarity.Crown1, cardIndex),
  ),
};
