'use client';
import { DataTableColumnHeader } from '@/components/data-table-column-header';
import { PackView } from '@/components/pack-view';
import { formatPercent } from '@/lib/formatters/formatPercent';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { PackSummary, usePackSummary } from './usePackSummary';

const columns: ColumnDef<PackSummary>[] = [
  {
    id: 'pack',
    accessorKey: 'pack.name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pack" />
    ),
    cell: ({ row }) => <PackView pack={row.getValue('pack')} />,
  },
  {
    id: 'cards',
    accessorFn: (row) => `${row.cardsOwnedCount} / ${row.cardsCount}`,
    header: ({ column }) => (
      <DataTableColumnHeader
        className="ml-0 -mr-4"
        column={column}
        title="Cards"
      />
    ),
    cell: ({ row }) => row.getValue('cards'),
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'cardsOwnedPercentage',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="ml-0 -mr-4"
        column={column}
        title="Owned"
      />
    ),
    cell: ({ row }) => formatPercent(row.getValue('cardsOwnedPercentage')),
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'newCardChance',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="ml-0 -mr-4"
        column={column}
        title="New Card Chance"
      />
    ),
    cell: ({ row }) => formatPercent(row.getValue('newCardChance')),
    enableGlobalFilter: false,
  },
];

export function usePackTable() {
  const packSummary = usePackSummary();

  return useReactTable({
    data: packSummary,
    columns,
    getRowId: (row) => row.pack.name,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: true,
    globalFilterFn: 'auto',
    initialState: {
      sorting: [{ id: 'newCardChance', desc: true }],
    },
  });
}
