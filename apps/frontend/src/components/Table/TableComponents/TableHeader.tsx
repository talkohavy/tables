import { useCallback } from 'react';
import { flexRender } from '@tanstack/react-table';
import ArrowIcon from '../../../utils/svgs/ArrowIcon';
import DefaultFilter from '../DefaultFilter';

const SORTING_ICONS = {
  asc: () => <ArrowIcon size={16} />,
  desc: () => <ArrowIcon size={16} className='rotate-180' />,
  none: '',
};

export default function TableHeader({ tableInstance, getHeaderGroups }) {
  // all useCallbacks:
  const onHeaderClick = useCallback(
    (e, header) => e.target.tagName !== 'INPUT' && header.column.getToggleSortingHandler()(e),
    [],
  );

  return (
    <thead>
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className='react-table-header-row'>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              style={{ width: header.getSize() }}
              className='react-table-header-cell'
            >
              {header.isPlaceholder ? null : (
                <div>
                  <div className='flex w-full items-center justify-between'>
                    {/* ------------------ */}
                    {/* Display the Header */}
                    {/* ------------------ */}
                    <div className='react-table-header-cell-value'>
                      {/* <div className='flex w-full select-none items-center justify-between'> */}
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </div>

                    {/* ------------------ */}
                    {/* Display the Sorter */}
                    {/* ------------------ */}
                    {header.column.getCanSort() && header.column.columnDef.enableSorting ? (
                      <div className='cursor-pointer' onClick={(e) => onHeaderClick(e, header)}>
                        {SORTING_ICONS[header.column.getIsSorted()]?.() ?? SORTING_ICONS.none}
                      </div>
                    ) : null}
                  </div>

                  {/* ------------------ */}
                  {/* Display the Filter */}
                  {/* ------------------ */}
                  {header.column.getCanFilter() && header.column.columnDef.enableColumnFilter ? (
                    <DefaultFilter table={tableInstance} column={header.column} />
                  ) : null}
                </div>
              )}

              {header.column.getCanResize() && (
                <div
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`}
                />
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}
