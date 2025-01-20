import { CardRarity } from '@/lib/data/types';

const regularOdds = {
  [CardRarity.Diamond1]: [100.0, 100.0, 100.0, 0.0, 0.0],
  [CardRarity.Diamond2]: [0.0, 0.0, 0.0, 90.0, 60.0],
  [CardRarity.Diamond3]: [0.0, 0.0, 0.0, 5.0, 20.0],
  [CardRarity.Diamond4]: [0.0, 0.0, 0.0, 1.666, 6.664],
  [CardRarity.Star1]: [0.0, 0.0, 0.0, 2.572, 10.288],
  [CardRarity.Star2]: [0.0, 0.0, 0.0, 0.5, 2],
  [CardRarity.Star3]: [0.0, 0.0, 0.0, 0.222, 0.888],
  [CardRarity.Crown1]: [0.0, 0.0, 0.0, 0.04, 0.16],
};

const rareOdds = {
  [CardRarity.Diamond1]: [0, 0, 0, 0, 0],
  [CardRarity.Diamond2]: [0, 0, 0, 0, 0],
  [CardRarity.Diamond3]: [0, 0, 0, 0, 0],
  [CardRarity.Diamond4]: [0, 0, 0, 0, 0],
  [CardRarity.Star1]: [42.105, 42.105, 42.105, 42.105, 42.105],
  [CardRarity.Star2]: [47.368, 47.368, 47.368, 47.368, 47.368],
  [CardRarity.Star3]: [5.263, 5.263, 5.263, 5.263, 5.263],
  [CardRarity.Crown1]: [5.263, 5.263, 5.263, 5.263, 5.263],
};

const rarePackOdds = 0.05;

const regularPackOdds = 1 - rarePackOdds;

function calculateOdds(rarity: CardRarity, cardIndex: number) {
  return (
    regularOdds[rarity][cardIndex] * regularPackOdds +
    rareOdds[rarity][cardIndex] * rarePackOdds
  );
}

const cardIndices = [0, 1, 2, 3, 4];

export const odds = {
  [CardRarity.Diamond1]: cardIndices.map((i) =>
    calculateOdds(CardRarity.Diamond1, i),
  ),
  [CardRarity.Diamond2]: cardIndices.map((i) =>
    calculateOdds(CardRarity.Diamond2, i),
  ),
  [CardRarity.Diamond3]: cardIndices.map((i) =>
    calculateOdds(CardRarity.Diamond3, i),
  ),
  [CardRarity.Diamond4]: cardIndices.map((i) =>
    calculateOdds(CardRarity.Diamond4, i),
  ),
  [CardRarity.Star1]: cardIndices.map((i) =>
    calculateOdds(CardRarity.Star1, i),
  ),
  [CardRarity.Star2]: cardIndices.map((i) =>
    calculateOdds(CardRarity.Star2, i),
  ),
  [CardRarity.Star3]: cardIndices.map((i) =>
    calculateOdds(CardRarity.Star3, i),
  ),
  [CardRarity.Crown1]: cardIndices.map((i) =>
    calculateOdds(CardRarity.Crown1, i),
  ),
};
