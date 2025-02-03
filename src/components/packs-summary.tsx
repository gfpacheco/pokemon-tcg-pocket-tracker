'use client';

import { usePackSummary } from '@/hooks/usePackSummary';
import { allPacks } from '@/lib/data/all-packs';
import { formatPercent } from '@/lib/formatters/formatPercent';
import { twMerge } from 'tailwind-merge';
import { PackView } from './pack-view';
import { Card } from './ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export type PacksSummaryProps = React.HTMLAttributes<HTMLDivElement>;

export function PacksSummary({ className, ...rest }: PacksSummaryProps) {
  const { cardsCountByPack, cardsOwnedCountByPack, newCardChanceByPack } =
    usePackSummary();

  return (
    <Card className={twMerge('pb-2 flex flex-col', className)} {...rest}>
      <Table className="text-center">
        <TableHeader>
          <TableRow>
            <TableHead>Pack</TableHead>
            <TableHead>Cards</TableHead>
            <TableHead>Owned (%)</TableHead>
            <TableHead>New Card Chance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allPacks.map((pack) => (
            <TableRow key={pack.name}>
              <TableCell>
                <PackView pack={pack.name} />
              </TableCell>
              <TableCell>
                {cardsOwnedCountByPack[pack.name]} /{' '}
                {cardsCountByPack[pack.name]}
              </TableCell>
              <TableCell>
                {formatPercent(
                  (cardsOwnedCountByPack[pack.name] ?? 0) /
                    (cardsCountByPack[pack.name] ?? 0),
                )}
              </TableCell>
              <TableCell>
                {formatPercent(newCardChanceByPack[pack.name])}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
