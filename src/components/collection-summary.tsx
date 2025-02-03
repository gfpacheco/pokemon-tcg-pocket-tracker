'use client';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useCollectionSummary } from '@/hooks/useCollectionSummary';
import { cardsCountBySet, cardSets } from '@/lib/data/card-sets';
import { formatPercent } from '@/lib/formatters/formatPercent';
import { cn } from '@/lib/utils';
import { CardRarityView } from './card-rarity-view';
import { cardRaritiesForSummary } from './set-summary';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export type CollectionSummaryProps = React.HTMLAttributes<HTMLDivElement>;

export function CollectionSummary({
  className,
  ...rest
}: CollectionSummaryProps) {
  const summary = useCollectionSummary();

  return (
    <div className={cn('flex flex-col gap-4 md:flex-row', className)} {...rest}>
      <Card className="flex-1 pb-2 flex flex-col">
        <CardHeader>
          <CardTitle className="text-center">Owned</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center">
          <div className="text-7xl font-semibold">
            {summary.cardsOwnedCount} / {summary.cardsCount}
          </div>
          <div>{summary.cardsCount - summary.cardsOwnedCount} missing</div>
        </CardContent>
      </Card>
      <Card className="flex-1 pb-2">
        <CardHeader>
          <CardTitle className="text-center">By Rarity</CardTitle>
        </CardHeader>
        <Table className="text-center">
          <TableBody>
            {cardRaritiesForSummary.map(([rarity1, rarity2]) => (
              <TableRow key={rarity1}>
                <TableCell>
                  <CardRarityView rarity={rarity1} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[rarity1]} /{' '}
                  {summary.cardsCountByRarity[rarity1]}
                </TableCell>
                <TableCell>
                  <CardRarityView rarity={rarity2} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[rarity2]} /{' '}
                  {summary.cardsCountByRarity[rarity2]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Card className="flex-1 pb-2">
        <CardHeader>
          <CardTitle className="text-center">By Set</CardTitle>
        </CardHeader>
        <Table className="text-center">
          <TableBody>
            {cardSets.map((set) => (
              <TableRow key={set.name}>
                <TableCell>{set.name}</TableCell>
                <TableCell>
                  {summary.cardsOwnedCountBySet[set.name]} /{' '}
                  {cardsCountBySet[set.name]}
                </TableCell>
                <TableCell>
                  {formatPercent(
                    summary.cardsOwnedCountBySet[set.name] /
                      cardsCountBySet[set.name],
                  )}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>Promo</TableCell>
              <TableCell>
                {summary.promoCardsOwnedCount} / {summary.promoCardsCount}
              </TableCell>
              <TableCell>
                {formatPercent(
                  summary.promoCardsOwnedCount / summary.promoCardsCount,
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
