'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Product } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'photo_url',
    header: 'ФОТО',
    cell: ({ row }) => {
      const url = row.getValue('photo_url') as string;
      return (
        <div className="relative h-10 w-10">
          <img
            src={url || 'https://via.placeholder.com/40'}
            alt={row.getValue('name')}
            className="rounded-md object-cover"
          />
        </div>
      );
    }
  },
  {
    accessorKey: 'name',
    header: 'НАЗВА'
  },
  {
    accessorKey: 'category',
    header: 'КАТЕГОРІЯ'
  },
  {
    accessorKey: 'price',
    header: 'ЦІНА',
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price'));
      return <div>₴{price ? price.toLocaleString() : 0}</div>;
    }
  },
  {
    accessorKey: 'description',
    header: 'ОПИС',
    cell: ({ row }) => <div className="line-clamp-1">{row.getValue('description')}</div>
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
