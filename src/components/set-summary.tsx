'use client';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useSetSummary } from '@/hooks/useSetSummary';
import { CardRarity, CardSet } from '@/lib/data/types';
import { formatPercent } from '@/lib/formatters/formatPercent';
import { cn } from '@/lib/utils';
import { CardRarityView } from './card-rarity-view';
import { PackView } from './pack-view';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export const cardRaritiesForSummary = [
  [CardRarity.Diamond1, CardRarity.Star1],
  [CardRarity.Diamond2, CardRarity.Star2],
  [CardRarity.Diamond3, CardRarity.Star3],
  [CardRarity.Diamond4, CardRarity.Crown1],
];

export type SetSummaryProps = React.HTMLAttributes<HTMLDivElement> & {
  cardSet: CardSet;
};

export function SetSummary({ className, cardSet, ...rest }: SetSummaryProps) {
  const summary = useSetSummary(cardSet);

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
          <CardTitle className="text-center">By Pack</CardTitle>
        </CardHeader>
        <Table className="text-center">
          <TableBody>
            {cardSet.packs.map((pack) => (
              <TableRow key={pack.name}>
                <TableCell>
                  <PackView pack={pack.name} />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByPack[pack.name] ?? 0} /{' '}
                  {summary.cardsCountByPack[pack.name] ?? 0}
                </TableCell>
                <TableCell>
                  {formatPercent(
                    (summary.cardsOwnedCountByPack[pack.name] ?? 0) /
                      (summary.cardsCountByPack[pack.name] ?? 0),
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
