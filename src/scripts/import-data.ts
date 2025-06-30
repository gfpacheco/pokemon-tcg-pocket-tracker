import {
  Card,
  CardPack,
  CardPackName,
  CardRarity,
  CardSet,
  CardSetName,
  CardType,
  PokemonType,
  pokemonTypes,
} from '@/lib/data/types';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = fs.readFileSync(path.join(__dirname, 'data.csv'), 'utf-8');

type CardData = {
  setId: string;
  setName: CardSetName;
  cardNumber: number;
  cardName: string;
  cardRarity: CardRarity;
  cardType: string;
  packName: CardPackName | '-' | 'All';
  promoId: string;
  promoNumber: number;
  promoName: string;
  promoType: string;
};

const rows: CardData[] = parse(data, {
  cast: true,
  relax_column_count: true,
  columns: [
    'setId',
    'setName',
    'cardNumber',
    'cardName',
    'cardRarity',
    'cardType',
    'packName',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'promoId',
    '',
    'promoNumber',
    'promoName',
    'promoType',
    '',
  ],
});

const sets: Record<string, CardSet> = {};
const packs: Record<string, CardPack> = {};

rows
  .filter((row) => row.setId)
  .forEach(({ setId, setName, packName }) => {
    if (!sets[setId]) {
      sets[setId] = {
        id: setId,
        name: setName,
        cardsByRarity: {
          '♢': 0,
          '♢♢': 0,
          '♢♢♢': 0,
          '♢♢♢♢': 0,
          '☆': 0,
          '☆☆': 0,
          '☆☆☆': 0,
          '✨': 0,
          '✨✨': 0,
          '♛': 0,
        },
        packs: [],
        cards: [],
      };
    }

    if (packName !== '-' && packName !== 'All' && !packs[packName]) {
      packs[packName] = {
        name: packName,
        cardByRarity: {
          '♢': 0,
          '♢♢': 0,
          '♢♢♢': 0,
          '♢♢♢♢': 0,
          '☆': 0,
          '☆☆': 0,
          '☆☆☆': 0,
          '✨': 0,
          '✨✨': 0,
          '♛': 0,
        },
        set: setName,
      };
      sets[setId].packs.push(packs[packName]);
    }
  });

rows.forEach(
  ({
    setId,
    setName,
    cardNumber,
    cardName,
    cardRarity,
    cardType,
    packName,
  }) => {
    const set = sets[setId];
    const isPokemon = pokemonTypes.includes(cardType as PokemonType);

    const card: Card = {
      id: `${setId}-${cardNumber}`,
      number: cardNumber,
      name: cardName,
      rarity: cardRarity,
      type: isPokemon ? 'Pokémon' : (cardType as CardType),
      pokemonType: isPokemon ? (cardType as PokemonType) : undefined,
      set: setName,
      packs: [],
    };

    if (packName === 'All') {
      card.packs = set.packs.map((p) => {
        p.cardByRarity[cardRarity] += 1;
        return p.name;
      });
    } else if (packName !== '-') {
      packs[packName].cardByRarity[cardRarity] += 1;
      card.packs.push(packName);
    }

    set.cardsByRarity[cardRarity] += 1;
    set.cards.push(card);
  },
);

const allSets = Object.values(sets);
allSets.sort((a, b) => a.id.localeCompare(b.id));

fs.writeFileSync(
  path.join(__dirname, '../lib/data/card-sets.ts'),
  `import { CardSet, CardSetName } from './types';

export const allSets: CardSet[] = ${JSON.stringify(allSets, null, 2)};

export const allSetsByName = allSets.reduce((acc, set) => {
  acc[set.name] = set;
  return acc;
}, {} as Record<CardSetName, CardSet>);`,
);

const promo = rows
  .filter((row) => row.promoId)
  .map(({ promoId, promoNumber, promoName, promoType }) => {
    promoType = promoType
      .replace('Supporter', 'Trainer')
      .replace('Electric', 'Lightning')
      .replace('Steel', 'Metal');
    const isPokemon = pokemonTypes.includes(promoType as PokemonType);

    return {
      id: `${promoId}-${promoNumber}`,
      number: promoNumber,
      name: promoName,
      type: isPokemon ? 'Pokémon' : (promoType as CardType),
      pokemonType: isPokemon ? (promoType as PokemonType) : undefined,
      packs: [],
    } as Card;
  });

fs.writeFileSync(
  path.join(__dirname, '../lib/data/promo.ts'),
  `import { Card } from './types';

export const promo: Card[] = ${JSON.stringify(promo, null, 2)};`,
);
