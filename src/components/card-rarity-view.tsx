import { CardRarity } from '@/lib/data/types';
import { cn } from '@/lib/utils';

function getRarityIcon(rarity: CardRarity) {
  switch (rarity) {
    case '♢':
      return '🔶';
    case '♢♢':
      return '🔶🔶';
    case '♢♢♢':
      return '🔶🔶🔶';
    case '♢♢♢♢':
      return '🔶🔶🔶🔶';
    case '☆':
      return '⭐️';
    case '☆☆':
      return '⭐️⭐️';
    case '☆☆☆':
      return '⭐️⭐️⭐️';
    case '✨':
      return '✨';
    case '✨✨':
      return '✨✨';
    case '♛':
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
        size === 'sm' ? 'text-xs w-15' : 'text-sm w-15',
        className,
      )}
      {...rest}
    >
      {getRarityIcon(rarity)}
    </div>
  );
}
