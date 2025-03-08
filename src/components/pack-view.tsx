import { CardPackName } from '@/lib/data/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const classNamesByPack: Record<CardPackName, string> = {
  [CardPackName.Mewtwo]: 'bg-pack-[purple-600,purple-400]',
  [CardPackName.Charizard]: 'bg-pack-[purple-600,orange-400]',
  [CardPackName.Pikachu]: 'bg-pack-[purple-600,yellow-400]',
  [CardPackName.Mew]: 'bg-pack-[emerald-400,teal-300]',
  [CardPackName.Dialga]: 'bg-pack-[gray-400,blue-600] text-primary-foreground',
  [CardPackName.Palkia]: 'bg-pack-[gray-400,pink-400] text-primary-foreground',
  [CardPackName.Arceus]:
    'bg-pack-[amber-400,yellow-600] text-primary-foreground',
};

const buttonVariants = cva('text-xs px-2 py-0.5 rounded-full', {
  variants: {
    pack: classNamesByPack,
  },
});

export type PackViewProps = React.HTMLAttributes<HTMLSpanElement> & {
  pack: CardPackName;
};

export function PackView({ className, pack, ...rest }: PackViewProps) {
  return (
    <span className={cn(buttonVariants({ pack }), className)} {...rest}>
      {pack}
    </span>
  );
}
