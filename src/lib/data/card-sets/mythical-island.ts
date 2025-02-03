import { odds } from '../odds';
import {
  CardPackName,
  CardRarity,
  CardSet,
  CardSetName,
  CardType,
  PokemonType,
} from '../types';

export const mythicalIsland: CardSet = {
  name: CardSetName.MythicalIsland,
  cardsByRarity: {
    [CardRarity.Diamond1]: 32,
    [CardRarity.Diamond2]: 23,
    [CardRarity.Diamond3]: 8,
    [CardRarity.Diamond4]: 5,
    [CardRarity.Star1]: 6,
    [CardRarity.Star2]: 10,
    [CardRarity.Star3]: 1,
    [CardRarity.Crown1]: 1,
  },
  packs: [
    {
      name: CardPackName.Mew,
      cardOddsByRarity: {
        [CardRarity.Diamond1]: odds[CardRarity.Diamond1].map(
          (odds) => odds / 32,
        ),
        [CardRarity.Diamond2]: odds[CardRarity.Diamond2].map(
          (odds) => odds / 23,
        ),
        [CardRarity.Diamond3]: odds[CardRarity.Diamond3].map(
          (odds) => odds / 8,
        ),
        [CardRarity.Diamond4]: odds[CardRarity.Diamond4].map(
          (odds) => odds / 5,
        ),
        [CardRarity.Star1]: odds[CardRarity.Star1].map((odds) => odds / 6),
        [CardRarity.Star2]: odds[CardRarity.Star2].map((odds) => odds / 10),
        [CardRarity.Star3]: odds[CardRarity.Star3].map((odds) => odds / 1),
        [CardRarity.Crown1]: odds[CardRarity.Crown1].map((odds) => odds / 1),
      },
    },
  ],
  cards: [
    {
      id: 'A1a-1',
      number: 1,
      name: 'Exeggcute',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-2',
      number: 2,
      name: 'Exeggutor',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-3',
      number: 3,
      name: 'Celebi EX',
      rarity: CardRarity.Diamond4,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-4',
      number: 4,
      name: 'Snivy',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-5',
      number: 5,
      name: 'Servine',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-6',
      number: 6,
      name: 'Serperior',
      rarity: CardRarity.Diamond3,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-7',
      number: 7,
      name: 'Morelull',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-8',
      number: 8,
      name: 'Shiinotic',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-9',
      number: 9,
      name: 'Dhelmise',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-10',
      number: 10,
      name: 'Ponyta',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fire,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-11',
      number: 11,
      name: 'Rapidash',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fire,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-12',
      number: 12,
      name: 'Magmar',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fire,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-13',
      number: 13,
      name: 'Larvesta',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fire,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-14',
      number: 14,
      name: 'Volcarona',
      rarity: CardRarity.Diamond3,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fire,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-15',
      number: 15,
      name: 'Salandit',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fire,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-16',
      number: 16,
      name: 'Salazzle',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fire,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-17',
      number: 17,
      name: 'Magikarp',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-18',
      number: 18,
      name: 'Gyarados EX',
      rarity: CardRarity.Diamond4,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-19',
      number: 19,
      name: 'Vaporeon',
      rarity: CardRarity.Diamond3,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-20',
      number: 20,
      name: 'Finneon',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-21',
      number: 21,
      name: 'Lumineon',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-22',
      number: 22,
      name: 'Chewtle',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-23',
      number: 23,
      name: 'Drednaw',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-24',
      number: 24,
      name: 'Cramorant',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-25',
      number: 25,
      name: 'Pikachu',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Lightning,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-26',
      number: 26,
      name: 'Raichu',
      rarity: CardRarity.Diamond3,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Lightning,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-27',
      number: 27,
      name: 'Electabuzz',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Lightning,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-28',
      number: 28,
      name: 'Joltik',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Lightning,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-29',
      number: 29,
      name: 'Galvantula',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Lightning,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-30',
      number: 30,
      name: 'Dedenne',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Lightning,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-31',
      number: 31,
      name: 'Mew',
      rarity: CardRarity.Diamond3,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-32',
      number: 32,
      name: 'Mew EX',
      rarity: CardRarity.Diamond4,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-33',
      number: 33,
      name: 'Sigilyph',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-34',
      number: 34,
      name: 'Elgyem',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-35',
      number: 35,
      name: 'Beheeyem',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-36',
      number: 36,
      name: 'Flabébé',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-37',
      number: 37,
      name: 'Floette',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-38',
      number: 38,
      name: 'Florges',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-39',
      number: 39,
      name: 'Swirlix',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-40',
      number: 40,
      name: 'Slurpuff',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-41',
      number: 41,
      name: 'Mankey',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-42',
      number: 42,
      name: 'Primeape',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-43',
      number: 43,
      name: 'Geodude',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-44',
      number: 44,
      name: 'Graveler',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-45',
      number: 45,
      name: 'Golem',
      rarity: CardRarity.Diamond3,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-46',
      number: 46,
      name: 'Aerodactyl EX',
      rarity: CardRarity.Diamond4,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-47',
      number: 47,
      name: 'Marshadow',
      rarity: CardRarity.Diamond3,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-48',
      number: 48,
      name: 'Stonjourner',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-49',
      number: 49,
      name: 'Koffing',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Darkness,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-50',
      number: 50,
      name: 'Weezing',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Darkness,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-51',
      number: 51,
      name: 'Purrloin',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Darkness,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-52',
      number: 52,
      name: 'Liepard',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Darkness,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-53',
      number: 53,
      name: 'Venipede',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Darkness,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-54',
      number: 54,
      name: 'Whirlipede',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Darkness,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-55',
      number: 55,
      name: 'Scolipede',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Darkness,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-56',
      number: 56,
      name: 'Druddigon',
      rarity: CardRarity.Diamond2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Dragon,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-57',
      number: 57,
      name: 'Pidgey',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Colorless,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-58',
      number: 58,
      name: 'Pidgeotto',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Colorless,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-59',
      number: 59,
      name: 'Pidgeot EX',
      rarity: CardRarity.Diamond4,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Colorless,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-60',
      number: 60,
      name: 'Tauros',
      rarity: CardRarity.Diamond3,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Colorless,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-61',
      number: 61,
      name: 'Eevee',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Colorless,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-62',
      number: 62,
      name: 'Chatot',
      rarity: CardRarity.Diamond1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Colorless,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-63',
      number: 63,
      name: 'Old Amber',
      rarity: CardRarity.Diamond1,
      type: CardType.Item,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-64',
      number: 64,
      name: 'Pokémon Flute',
      rarity: CardRarity.Diamond2,
      type: CardType.Item,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-65',
      number: 65,
      name: 'Mythical Slab',
      rarity: CardRarity.Diamond2,
      type: CardType.Item,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-66',
      number: 66,
      name: 'Budding Expeditioner',
      rarity: CardRarity.Diamond2,
      type: CardType.Trainer,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-67',
      number: 67,
      name: 'Blue',
      rarity: CardRarity.Diamond2,
      type: CardType.Trainer,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-68',
      number: 68,
      name: 'Leaf',
      rarity: CardRarity.Diamond2,
      type: CardType.Trainer,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-69',
      number: 69,
      name: 'Exeggutor',
      rarity: CardRarity.Star1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-70',
      number: 70,
      name: 'Serperior',
      rarity: CardRarity.Star1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-71',
      number: 71,
      name: 'Salandit',
      rarity: CardRarity.Star1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fire,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-72',
      number: 72,
      name: 'Vaporeon',
      rarity: CardRarity.Star1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-73',
      number: 73,
      name: 'Dedenne',
      rarity: CardRarity.Star1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Lightning,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-74',
      number: 74,
      name: 'Marshadow',
      rarity: CardRarity.Star1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-75',
      number: 75,
      name: 'Celebi EX',
      rarity: CardRarity.Star2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-76',
      number: 76,
      name: 'Gyarados EX',
      rarity: CardRarity.Star2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Water,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-77',
      number: 77,
      name: 'Mew EX',
      rarity: CardRarity.Star2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-78',
      number: 78,
      name: 'Aerodactyl EX',
      rarity: CardRarity.Star2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-79',
      number: 79,
      name: 'Pidgeot EX',
      rarity: CardRarity.Star2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Colorless,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-80',
      number: 80,
      name: 'Budding Expeditioner',
      rarity: CardRarity.Star2,
      type: CardType.Trainer,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-81',
      number: 81,
      name: 'Blue',
      rarity: CardRarity.Star2,
      type: CardType.Trainer,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-82',
      number: 82,
      name: 'Leaf',
      rarity: CardRarity.Star2,
      type: CardType.Trainer,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-83',
      number: 83,
      name: 'Mew EX',
      rarity: CardRarity.Star2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-84',
      number: 84,
      name: 'Aerodactyl EX',
      rarity: CardRarity.Star2,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Fighting,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-85',
      number: 85,
      name: 'Celebi EX',
      rarity: CardRarity.Star3,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Grass,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
    {
      id: 'A1a-86',
      number: 86,
      name: 'Mew EX',
      rarity: CardRarity.Crown1,
      type: CardType.Pokemon,
      pokemonType: PokemonType.Psychic,
      set: CardSetName.MythicalIsland,
      packs: [CardPackName.Mew],
    },
  ],
};
