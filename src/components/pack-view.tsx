import { CardPackName } from '@/lib/data/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const buttonVariants = cva('text-xs px-2 py-0.5 rounded-full', {
  variants: {
    pack: {
      [CardPackName.Mewtwo]: 'bg-purple-600 text-primary-foreground',
      [CardPackName.Charizard]: 'bg-red-600 text-primary-foreground',
      [CardPackName.Pikachu]: 'bg-yellow-400',
    } as Record<CardPackName, string>,
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
