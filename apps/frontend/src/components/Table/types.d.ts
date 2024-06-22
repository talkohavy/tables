import type { ReactNode } from 'react';
import type { ColumnDef } from '@tanstack/react-table';

type DefaultColumn = {
  enableMultiSort?: boolean;
  enableGlobalFilter?: boolean;
  enableColumnFilter?: boolean;
  enablePinning?: boolean;
  enableGrouping?: boolean;
  sortDescFirst?: boolean;
  enableResizing?: boolean;
};

type ExtendedColumnDef<T> = ColumnDef<T> & { addCheckbox?: boolean };

type BasicTable<T> = {
  data: Array<T>;
  columnDefs?: Array<ExtendedColumnDef<T>>;
  defaultColumn?: DefaultColumn;
  rowSelectionMode?: 'none' | 'single' | 'multi';
  sorting?: any;
  setSorting?: any;
  searchText?: string;
  onCellClick?: (data: any) => void;
  setSearchText?: (value: any) => void;
  renderTableFooter?: (props: any) => ReactNode;
  onBottomReached?: () => void;
  isFetching?: boolean;
  isLoading?: boolean;
  className?: string;
  totalItemsLoadedCount?: number;
  totalItemsOverallCount?: number;
  initialPageSize?: number;
};

export { BasicTable, DefaultColumn };
