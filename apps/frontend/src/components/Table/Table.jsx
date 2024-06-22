// @ts-nocheck
import { forwardRef, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { useVirtual } from 'react-virtual';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { BASIC_TABLE_CLASSNAME, GAP_TO_BOTTOM, ROW_SELECTION_MODES } from './constants';
import ColumnHeader from './TableComponents/ColumnHeader';
import TableBody from './TableComponents/TableBody';
import TableHeader from './TableComponents/TableHeader';

/**
 * @param { import('./types').BasicTable<any> } props
 * @param { any } ref
 */
function TableToForward(props, ref) {
  const {
    data: dataRaw,
    columnDefs = [],
    defaultColumn,
    rowSelectionMode = 'none',
    searchText,
    setSearchText,
    renderTableFooter,
    onCellClick,
    onBottomReached,
    isFetching,
    isLoading,
    initialPageSize,
    sorting,
    setSorting,
    totalItemsLoadedCount,
    totalItemsOverallCount,
    className,
  } = props;

  // all useRefs:
  const tableParentRef = useRef(null);

  // all useStates:
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState([]);

  // all useMemos:
  const data = useMemo(() => dataRaw, [dataRaw]);
  const columns = useMemo(
    () =>
      columnDefs.map((curItem) => {
        if (curItem.addCheckbox)
          return { ...curItem, header: (props) => <ColumnHeader {...props} {...curItem} header={curItem.header} /> };

        return curItem;
      }),
    [columnDefs],
  );

  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement) => {
      if (containerRefElement && onBottomReached) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        if (
          scrollHeight - scrollTop - clientHeight < GAP_TO_BOTTOM &&
          !isFetching &&
          totalItemsLoadedCount < totalItemsOverallCount
        )
          onBottomReached();
      }
    },
    [onBottomReached, isFetching, totalItemsLoadedCount, totalItemsOverallCount],
  );

  // a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  useEffect(() => {
    fetchMoreOnBottomReached(tableParentRef.current);
  }, [fetchMoreOnBottomReached]);

  // useReactTable:
  const tableInstance = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    autoResetPageIndex: false, // When requesting/fetching a new page with loadMore function, don't reset to page 0 upon successful load!
    state: { sorting, rowSelection, columnFilters, globalFilter: searchText },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onGlobalFilterChange: setSearchText,
    onColumnFiltersChange: setColumnFilters,
    enableSorting: true,
    enableMultiSort: true,
    sortDescFirst: false,
    ...ROW_SELECTION_MODES[rowSelectionMode],
    enableGlobalFilter: true,
    enableColumnFilters: true,
    defaultColumn,
    // pageCount: 10, // <--- you can hard code you last page number here!
  });
  ref ??= {};
  ref.current = tableInstance;
  const { getHeaderGroups, getRowModel } = tableInstance;

  useEffect(() => {
    // When loading the table with a custom perPage, change the table's default perPage (which is 10) to the custom one passed.
    // If the page was loaded with infinite scroll mode, initialPageSize will be 0, and so you need to set MAX_SAFE_INTEGER.
    tableInstance.setPageSize(initialPageSize || Number.MAX_SAFE_INTEGER);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { rows } = getRowModel();

  // Calculate virtual gaps:
  // NOTE: MUST happen before isLoading returns null! That's why it's not inside TableBody.
  const rowVirtualizer = useVirtual({ parentRef: tableParentRef, size: rows.length, overscan: 10 });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const virtualPaddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const virtualPaddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.at(-1)?.end || 0) : 0;

  if (isLoading)
    return (
      <div className='flex h-full w-full items-center justify-center rounded-lg border text-center'>Loading...</div>
    );

  return (
    <div className={clsx('flex flex-col overflow-auto', className)}>
      <div
        onScroll={onBottomReached ? (e) => fetchMoreOnBottomReached(e.target) : undefined}
        className='react-table-ref-container h-full w-full overflow-auto'
        // className='h-full w-full overflow-auto border border-gray-300'
        ref={tableParentRef}
      >
        <table className={BASIC_TABLE_CLASSNAME}>
          <TableHeader tableInstance={tableInstance} getHeaderGroups={getHeaderGroups} />

          <TableBody
            rows={rows}
            virtualRows={virtualRows}
            virtualPaddingTop={virtualPaddingTop}
            virtualPaddingBottom={virtualPaddingBottom}
            onCellClick={onCellClick}
          />
        </table>
      </div>

      {renderTableFooter?.({ ...tableInstance })}
    </div>
  );
}

const Table = memo(forwardRef(TableToForward));

export default Table;
