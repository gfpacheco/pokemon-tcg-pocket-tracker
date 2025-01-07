export type CardSet = {
  name: string;
  cardsPerRarity: Record<CardRarity, number>;
  packs: CardPack[];
  cards: Card[];
};

export enum CardPackName {
  Mewtwo = 'Mewtwo',
  Charizard = 'Charizard',
  Pikachu = 'Pikachu',
  Mew = 'Mew',
}

export type CardPack = {
  name: CardPackName;
  cardsPerRarity: Record<CardRarity, number>;
};

export enum CardRarity {
  Diamond1 = 1,
  Diamond2 = 2,
  Diamond3 = 3,
  Diamond4 = 4,
  Star1 = 5,
  Star2 = 6,
  Star3 = 7,
  Crown1 = 8,
}

export const cardRarities = [
  CardRarity.Diamond1,
  CardRarity.Diamond2,
  CardRarity.Diamond3,
  CardRarity.Diamond4,
  CardRarity.Star1,
  CardRarity.Star2,
  CardRarity.Star3,
  CardRarity.Crown1,
];

export enum CardType {
  Pokemon = 'Pokémon',
  Trainer = 'Trainer',
  Item = 'Item',
}

export enum PokemonType {
  Grass = 'Grass',
  Fire = 'Fire',
  Water = 'Water',
  Electric = 'Electric',
  Psychic = 'Psychic',
  Fighting = 'Fighting',
  Darkness = 'Darkness',
  Metal = 'Metal',
  Dragon = 'Dragon',
  Colorless = 'Colorless',
}

export type Card = {
  id: string;
  number: number;
  name: string;
  rarity?: CardRarity;
  type: CardType;
  pokemonType?: PokemonType;
  packs: string[];
};
