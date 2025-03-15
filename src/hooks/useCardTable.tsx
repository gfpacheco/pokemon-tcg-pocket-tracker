'use client';
import { CardRarityView } from '@/components/card-rarity-view';
import { DataTableColumnHeader } from '@/components/data-table-column-header';
import { PackView } from '@/components/pack-view';
import { PokemonTypeView } from '@/components/pokemon-type-view';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardPackName } from '@/lib/data/types';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  Table as ITable,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect } from 'react';
import { useCardsOwned } from './useCardsOwned';

function getGlobalSelectedState(table: ITable<Card>) {
  const filteredRows = table.getFilteredRowModel().rows;
  const selectedCount = filteredRows.filter((row) =>
    row.getIsSelected(),
  ).length;
  return selectedCount === filteredRows.length
    ? true
    : selectedCount > 0
    ? 'indeterminate'
    : false;
}

const columns: ColumnDef<Card>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <div className="flex items-center">
        <Checkbox
          checked={getGlobalSelectedState(table)}
          onCheckedChange={(value) => {
            if (
              window.confirm(
                'This action will override your current selection. Do you want to continue?',
              )
            ) {
              table.toggleAllRowsSelected(Boolean(value));
            }
          }}
          aria-label="Mark as owned"
        />
      </div>
    ),
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
    cell: ({ row }) => (
      <PokemonTypeView pokemonType={row.getValue('pokemonType')} />
    ),
  },
  {
    accessorKey: 'packs',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Packs" />
    ),
    cell: ({ row }) => (
      <div className="flex gap-1">
        {row.getValue<CardPackName[]>('packs').map((pack) => (
          <PackView key={pack} pack={pack} />
        ))}
      </div>
    ),
  },
];

export function useCardTable(cards: Card[], search: string, isPromo?: boolean) {
  const { cardsOwned, updateCardsOwned } = useCardsOwned();

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
        rarity: !isPromo,
        packs: !isPromo,
      },
      sorting: [{ id: 'number', desc: false }],
    },
    state: {
      rowSelection: cardsOwned,
    },
    onRowSelectionChange: (updater) => {
      const newCardsOwned =
        typeof updater === 'function' ? updater(cardsOwned) : updater;

      const changedCards: Record<string, boolean> = {};

      Object.keys(newCardsOwned)
        .filter((key) => newCardsOwned[key] !== cardsOwned[key])
        .forEach((key) => (changedCards[key] = newCardsOwned[key]));

      Object.keys(cardsOwned)
        .filter((key) => cardsOwned[key] !== newCardsOwned[key])
        .forEach((key) => (changedCards[key] = newCardsOwned[key]));

      updateCardsOwned(changedCards);
    },
  });

  useEffect(() => {
    table.setGlobalFilter(search);
  }, [search, table]);
  return table;
}
