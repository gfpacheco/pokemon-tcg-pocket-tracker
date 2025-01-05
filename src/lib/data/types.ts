export type CardSet = {
  name: string;
  packs: CardPack[];
  cards: Card[];
};

export type CardPack = {
  name: string;
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
