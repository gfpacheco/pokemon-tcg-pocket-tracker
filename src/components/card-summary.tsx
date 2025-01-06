'use client';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useSetSummary } from '@/hooks/useSetSummary';
import { CardRarity, CardSet, Card as ICard } from '@/lib/data/types';
import { cn } from '@/lib/utils';
import { CardRarityView } from './card-rarity-view';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export type CardSummaryProps = React.HTMLAttributes<HTMLDivElement> & {
  set?: CardSet;
  cards: ICard[];
  cardsOwned: string[];
};

export function CardSummary({
  className,
  set,
  cards,
  cardsOwned,
  ...rest
}: CardSummaryProps) {
  const summary = useSetSummary(set, cards, cardsOwned);

  return (
    <div className={cn('flex gap-4', className)} {...rest}>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>
            Cards owned: {summary.cardsOwnedCount} / {summary.cardsCount}
          </CardTitle>
        </CardHeader>
        {set && (
          <CardContent>
            <Table className="text-center">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <CardRarityView rarity={CardRarity.Diamond1} size="sm" />
                  </TableCell>
                  <TableCell>
                    {summary.cardsOwnedCountByRarity[CardRarity.Diamond1]} /{' '}
                    {set.cardsPerRarity[CardRarity.Diamond1]}
                  </TableCell>
                  <TableCell>
                    <CardRarityView rarity={CardRarity.Star1} size="sm" />
                  </TableCell>
                  <TableCell>
                    {summary.cardsOwnedCountByRarity[CardRarity.Star1]} /{' '}
                    {set.cardsPerRarity[CardRarity.Star1]}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CardRarityView rarity={CardRarity.Diamond2} size="sm" />
                  </TableCell>
                  <TableCell>
                    {summary.cardsOwnedCountByRarity[CardRarity.Diamond2]} /{' '}
                    {set.cardsPerRarity[CardRarity.Diamond2]}
                  </TableCell>
                  <TableCell>
                    <CardRarityView rarity={CardRarity.Star2} size="sm" />
                  </TableCell>
                  <TableCell>
                    {summary.cardsOwnedCountByRarity[CardRarity.Star2]} /{' '}
                    {set.cardsPerRarity[CardRarity.Star2]}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CardRarityView rarity={CardRarity.Diamond3} size="sm" />
                  </TableCell>
                  <TableCell>
                    {summary.cardsOwnedCountByRarity[CardRarity.Diamond3]} /{' '}
                    {set.cardsPerRarity[CardRarity.Diamond3]}
                  </TableCell>
                  <TableCell>
                    <CardRarityView rarity={CardRarity.Star3} size="sm" />
                  </TableCell>
                  <TableCell>
                    {summary.cardsOwnedCountByRarity[CardRarity.Star3]} /{' '}
                    {set.cardsPerRarity[CardRarity.Star3]}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <CardRarityView rarity={CardRarity.Diamond4} size="sm" />
                  </TableCell>
                  <TableCell>
                    {summary.cardsOwnedCountByRarity[CardRarity.Diamond4]} /{' '}
                    {set.cardsPerRarity[CardRarity.Diamond4]}
                  </TableCell>
                  <TableCell>
                    <CardRarityView rarity={CardRarity.Crown1} size="sm" />
                  </TableCell>
                  <TableCell>
                    {summary.cardsOwnedCountByRarity[CardRarity.Crown1]} /{' '}
                    {set.cardsPerRarity[CardRarity.Crown1]}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        )}
      </Card>
      <Card className="flex-1" />
      <Card className="flex-1" />
    </div>
  );
}
