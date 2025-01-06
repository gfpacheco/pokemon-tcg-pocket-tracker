import { CardRarity } from '@/lib/data/types';
import { cn } from '@/lib/utils';

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

export type CardRarityViewProps = React.HTMLAttributes<HTMLDivElement> & {
  rarity: CardRarity;
  size?: 'sm' | 'md';
};

export function CardRarityView({
  className,
  rarity,
  size = 'md',
  ...rest
}: CardRarityViewProps) {
  return (
    <div
      className={cn(
        'inline-block text-center',
        size === 'sm' ? 'text-xs w-15' : 'text-sm w-18',
        className,
      )}
      {...rest}
    >
      {getRarityIcon(rarity)}
    </div>
  );
}
