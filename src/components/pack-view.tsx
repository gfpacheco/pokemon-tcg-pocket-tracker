import { CardPackName } from '@/lib/data/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const classNamesByPack: Record<CardPackName, string> = {
  [CardPackName.Mewtwo]: 'bg-purple-600 text-primary-foreground',
  [CardPackName.Charizard]: 'bg-red-600 text-primary-foreground',
  [CardPackName.Pikachu]: 'bg-yellow-400',
  [CardPackName.Mew]: 'bg-pink-300',
  [CardPackName.Dialga]: 'bg-blue-200',
  [CardPackName.Palkia]: 'bg-pink-200',
};

const buttonVariants = cva('text-xs px-2 py-0.5 rounded-full', {
  variants: {
    pack: classNamesByPack,
  },
});

export type PackViewProps = React.HTMLAttributes<HTMLDivElement> & {
  pack: CardPackName;
};

export function PackView({ className, pack, ...rest }: PackViewProps) {
  return (
    <div className={cn(buttonVariants({ pack }), className)} {...rest}>
      {pack}
    </div>
  );
}
