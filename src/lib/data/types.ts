export const cardSetNames = [
  'Genetic Apex',
  'Mythical Island',
  'Space-Time Smackdown',
  'Triumphant Light',
  'Shining Revelry',
  'Celestial Guardians',
  'Extradimensional Crisis',
  'Eevee Grove',
] as const;

export type CardSetName = (typeof cardSetNames)[number];

export type CardSet = {
  id: string;
  name: CardSetName;
  cardsByRarity: Record<CardRarity, number>;
  packs: CardPack[];
  cards: Card[];
};

export const cardPackNames = [
  'Mewtwo',
  'Pikachu',
  'Charizard',
  'Mew',
  'Dialga',
  'Palkia',
  'Arceus',
  'Shiny',
  'Lunala',
  'Solgaleo',
  'Buzzwole',
  'Eevee',
] as const;

export type CardPackName = (typeof cardPackNames)[number];

export type CardPack = {
  name: CardPackName;
  cardByRarity: Record<CardRarity, number>;
  set: CardSetName;
};

export const cardRarities = [
  '♢',
  '♢♢',
  '♢♢♢',
  '♢♢♢♢',
  '☆',
  '☆☆',
  '☆☆☆',
  '✨',
  '✨✨',
  '♛',
] as const;

export type CardRarity = (typeof cardRarities)[number];

export const cardTypes = ['Pokémon', 'Trainer', 'Item', 'Tool'] as const;

export type CardType = (typeof cardTypes)[number];

export const pokemonTypes = [
  'Grass',
  'Fire',
  'Water',
  'Lightning',
  'Psychic',
  'Fighting',
  'Darkness',
  'Metal',
  'Dragon',
  'Colorless',
] as const;

export type PokemonType = (typeof pokemonTypes)[number];

export type Card = {
  id: string;
  number: number;
  name: string;
  rarity?: CardRarity;
  type: CardType;
  pokemonType?: PokemonType;
  set?: CardSetName;
  packs: CardPackName[];
};
