'use client';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useSetSummary } from '@/hooks/useSetSummary';
import { CardRarity, CardSet } from '@/lib/data/types';
import { formatPercent } from '@/lib/formatters/formatPercent';
import { cn } from '@/lib/utils';
import { CardRarityView } from './card-rarity-view';
import { PackView } from './pack-view';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export type SetSummaryProps = React.HTMLAttributes<HTMLDivElement> & {
  cardSet: CardSet;
  cardsOwned: string[];
};

export function SetSummary({
  className,
  cardSet,
  cardsOwned,
  ...rest
}: SetSummaryProps) {
  const summary = useSetSummary(cardSet, cardsOwned);

  return (
    <div className={cn('flex gap-4', className)} {...rest}>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-center">By Rarity</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="text-center">
            <TableBody>
              <TableRow>
                <TableCell>
                  <CardRarityView rarity={CardRarity.Diamond1} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[CardRarity.Diamond1]} /{' '}
                  {cardSet.cardsPerRarity[CardRarity.Diamond1]}
                </TableCell>
                <TableCell>
                  <CardRarityView rarity={CardRarity.Star1} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[CardRarity.Star1]} /{' '}
                  {cardSet.cardsPerRarity[CardRarity.Star1]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CardRarityView rarity={CardRarity.Diamond2} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[CardRarity.Diamond2]} /{' '}
                  {cardSet.cardsPerRarity[CardRarity.Diamond2]}
                </TableCell>
                <TableCell>
                  <CardRarityView rarity={CardRarity.Star2} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[CardRarity.Star2]} /{' '}
                  {cardSet.cardsPerRarity[CardRarity.Star2]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CardRarityView rarity={CardRarity.Diamond3} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[CardRarity.Diamond3]} /{' '}
                  {cardSet.cardsPerRarity[CardRarity.Diamond3]}
                </TableCell>
                <TableCell>
                  <CardRarityView rarity={CardRarity.Star3} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[CardRarity.Star3]} /{' '}
                  {cardSet.cardsPerRarity[CardRarity.Star3]}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CardRarityView rarity={CardRarity.Diamond4} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[CardRarity.Diamond4]} /{' '}
                  {cardSet.cardsPerRarity[CardRarity.Diamond4]}
                </TableCell>
                <TableCell>
                  <CardRarityView rarity={CardRarity.Crown1} size="sm" />
                </TableCell>
                <TableCell>
                  {summary.cardsOwnedCountByRarity[CardRarity.Crown1]} /{' '}
                  {cardSet.cardsPerRarity[CardRarity.Crown1]}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-center">By Pack</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="text-center">
            <TableBody>
              <TableRow>
                <TableCell>Total cards</TableCell>
                <TableCell>
                  {summary.cardsOwnedCount} / {summary.cardsCount}
                </TableCell>
                <TableCell>
                  {formatPercent(summary.cardsOwnedCount / summary.cardsCount)}
                </TableCell>
              </TableRow>
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
        </CardContent>
      </Card>
      <Card className="flex-1" />
    </div>
  );
}
