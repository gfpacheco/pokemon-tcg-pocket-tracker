import { Column } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={className}>{title}</div>;
  }

  const isAsc = column.getIsSorted() === 'asc';
  const isDesc = column.getIsSorted() === 'desc';
  return (
    <Button
      variant="ghost"
      className={cn('-ml-4 h-8 data-[state=open]:bg-accent', className)}
      onClick={() => column.toggleSorting(isAsc)}
    >
      <span>{title}</span>
      {isDesc ? <ArrowDown /> : isAsc ? <ArrowUp /> : <ChevronsUpDown />}
    </Button>
  );
}
