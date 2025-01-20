'use client';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useCollectionSummary } from '@/hooks/useCollectionSummary';
import { CardRarity } from '@/lib/data/types';
import { cn } from '@/lib/utils';
import { CardRarityView } from './card-rarity-view';
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
            <TableRow>
              <TableCell>
                <CardRarityView rarity={CardRarity.Diamond1} size="sm" />
              </TableCell>
              <TableCell>
                {summary.cardsOwnedCountByRarity[CardRarity.Diamond1]} /{' '}
                {/* {cardSet.cardsByRarity[CardRarity.Diamond1]} */}
              </TableCell>
              <TableCell>
                <CardRarityView rarity={CardRarity.Star1} size="sm" />
              </TableCell>
              <TableCell>
                {summary.cardsOwnedCountByRarity[CardRarity.Star1]} /{' '}
                {/* {cardSet.cardsByRarity[CardRarity.Star1]} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <CardRarityView rarity={CardRarity.Diamond2} size="sm" />
              </TableCell>
              <TableCell>
                {summary.cardsOwnedCountByRarity[CardRarity.Diamond2]} /{' '}
                {/* {cardSet.cardsByRarity[CardRarity.Diamond2]} */}
              </TableCell>
              <TableCell>
                <CardRarityView rarity={CardRarity.Star2} size="sm" />
              </TableCell>
              <TableCell>
                {summary.cardsOwnedCountByRarity[CardRarity.Star2]} /{' '}
                {/* {cardSet.cardsByRarity[CardRarity.Star2]} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <CardRarityView rarity={CardRarity.Diamond3} size="sm" />
              </TableCell>
              <TableCell>
                {summary.cardsOwnedCountByRarity[CardRarity.Diamond3]} /{' '}
                {/* {cardSet.cardsByRarity[CardRarity.Diamond3]} */}
              </TableCell>
              <TableCell>
                <CardRarityView rarity={CardRarity.Star3} size="sm" />
              </TableCell>
              <TableCell>
                {summary.cardsOwnedCountByRarity[CardRarity.Star3]} /{' '}
                {/* {cardSet.cardsByRarity[CardRarity.Star3]} */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <CardRarityView rarity={CardRarity.Diamond4} size="sm" />
              </TableCell>
              <TableCell>
                {summary.cardsOwnedCountByRarity[CardRarity.Diamond4]} /{' '}
                {/* {cardSet.cardsByRarity[CardRarity.Diamond4]} */}
              </TableCell>
              <TableCell>
                <CardRarityView rarity={CardRarity.Crown1} size="sm" />
              </TableCell>
              <TableCell>
                {summary.cardsOwnedCountByRarity[CardRarity.Crown1]} /{' '}
                {/* {cardSet.cardsByRarity[CardRarity.Crown1]} */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
      <Card className="flex-1 pb-2">
        <CardHeader>
          <CardTitle className="text-center">By Pack</CardTitle>
        </CardHeader>
        <Table className="text-center">
          <TableBody>
            {/* {cardSet.packs.map((pack) => (
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
            ))} */}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
