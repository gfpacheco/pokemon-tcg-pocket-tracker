import { CardRarity } from '@/lib/data/types';

function getRarityIcon(rarity: CardRarity) {
  switch (rarity) {
    case CardRarity.Diamond1:
      return '🔶';
    case CardRarity.Diamond2:
      return '🔶🔶';
    case CardRarity.Diamond3:
      return '🔶🔶🔶';
    case CardRarity.Diamond4:
      return '🔶🔶🔶🔶';
    case CardRarity.Star1:
      return '⭐️';
    case CardRarity.Star2:
      return '⭐️⭐️';
    case CardRarity.Star3:
      return '⭐️⭐️⭐️';
    case CardRarity.Crown1:
      return '👑';
  }
}

export type CardRarityViewProps = {
  rarity: CardRarity;
};

export function CardRarityView({ rarity }: CardRarityViewProps) {
  return <div className="w-14 text-center">{getRarityIcon(rarity)}</div>;
}
