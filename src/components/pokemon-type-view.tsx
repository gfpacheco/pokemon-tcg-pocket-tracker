import { PokemonType } from '@/lib/data/types';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const classNamesByPokemonType: Record<PokemonType, string> = {
  Grass: 'bg-green-600 text-primary-foreground',
  Fire: 'bg-red-600 text-primary-foreground',
  Water: 'bg-blue-600 text-primary-foreground',
  Lightning: 'bg-yellow-300',
  Psychic: 'bg-fuchsia-300',
  Fighting: 'bg-orange-600 text-primary-foreground',
  Darkness: 'bg-cyan-800 text-primary-foreground',
  Metal: 'bg-slate-400 text-primary-foreground',
  Dragon: 'bg-yellow-600 text-primary-foreground',
  Colorless: 'bg-stone-300',
};

const buttonVariants = cva('inline-block text-xs px-2 py-0.5 rounded-full', {
  variants: {
    pokemonType: classNamesByPokemonType,
  },
});

export type PokemonTypeViewProps = React.HTMLAttributes<HTMLDivElement> & {
  pokemonType: PokemonType | null;
};

export function PokemonTypeView({
  className,
  pokemonType,
  ...rest
}: PokemonTypeViewProps) {
  if (!pokemonType) {
    return null;
  }

  return (
    <div className={cn(buttonVariants({ pokemonType }), className)} {...rest}>
      {pokemonType}
    </div>
  );
}
