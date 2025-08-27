import { CardPackName } from '@/lib/data/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const classNamesByPack: Record<CardPackName, string> = {
  Mewtwo: 'bg-pack-[purple-600,purple-400]',
  Charizard: 'bg-pack-[purple-600,orange-400]',
  Pikachu: 'bg-pack-[purple-600,yellow-400]',
  Mew: 'bg-pack-[emerald-400,teal-300]',
  Dialga: 'bg-pack-[gray-400,blue-600] text-primary-foreground',
  Palkia: 'bg-pack-[gray-400,pink-400] text-primary-foreground',
  Arceus: 'bg-pack-[amber-400,yellow-900] text-primary-foreground',
  Shiny: 'bg-pack-[pink-200,violet-100]',
  Lunala: 'bg-pack-[blue-600,fuchsia-300]',
  Solgaleo: 'bg-pack-[blue-600,sky-400]',
  Buzzwole: 'bg-pack-[red-500,red-800] text-primary-foreground',
  Eevee: 'bg-pack-[yellow-800,yellow-600] text-primary-foreground',
  'Ho-Oh': 'bg-pack-[orange-200,amber-500]',
  Lugia: 'bg-pack-[orange-200,blue-400]',
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
