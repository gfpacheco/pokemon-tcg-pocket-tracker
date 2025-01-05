'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '@/lib/data/types';
import { UserCard } from '@prisma/client';
import { CardRarityView } from './card-rarity-view';
import { DataTableColumnHeader } from './data-table-column-header';

export const columns: ColumnDef<Card>[] = [
  {
    id: 'select',
    header: 'Owned',
    cell: ({ row }) => (
      <div className="flex items-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
          aria-label="Mark as owned"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'number',
    header: ({ column }) => <DataTableColumnHeader column={column} title="#" />,
  },
  {
    accessorKey: 'rarity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rarity" />
    ),
    cell: ({ row }) => <CardRarityView rarity={row.getValue('rarity')} />,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    accessorKey: 'pokemonType',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pokémon Type" />
    ),
  },
];

export type CardListProps = React.HTMLAttributes<HTMLDivElement> & {
  cards: Card[];
  userCards: UserCard[];
  search: string;
};

export function CardList({ cards, userCards, search, ...rest }: CardListProps) {
  const table = useReactTable({
    data: cards,
    columns,
    getRowId: (row) => row.id,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    globalFilterFn: 'auto',
    initialState: {
      globalFilter: search,
      columnVisibility: {
        rarity: cards[0].rarity !== undefined,
      },
      sorting: [{ id: 'number', desc: false }],
      rowSelection: userCards.reduce<Record<string, boolean>>(
        (acc, userCard) => {
          acc[userCard.cardId] = true;
          return acc;
        },
        {},
      ),
    },
  });

  useEffect(() => {
    table.setGlobalFilter(search);
  }, [search, table]);

  return (
    <div {...rest}>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
