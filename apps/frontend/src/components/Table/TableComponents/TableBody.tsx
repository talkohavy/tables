import clsx from 'clsx';
import { flexRender } from '@tanstack/react-table';

export default function TableBody({ virtualRows, virtualPaddingTop, virtualPaddingBottom, rows, onCellClick }) {
  return (
    <tbody>
      {virtualPaddingTop > 0 && (
        <tr>
          <td style={{ height: `${virtualPaddingTop}px` }} />
        </tr>
      )}
      {virtualRows.map((virtualRow) => {
        const row = rows[virtualRow.index];
        const handleRowClickOrKeyDown = row.getCanSelect()
          ? (e) => {
              if (e.type === 'click' || (['Enter', 'NumpadEnter'].includes(e.code) && !e.shiftKey)) {
                e.preventDefault();

                row.getToggleSelectedHandler();
              }
            }
          : undefined;

        return (
          <tr
            key={row.id}
            onClick={handleRowClickOrKeyDown}
            onKeyDown={handleRowClickOrKeyDown}
            className={clsx(
              // 'border truncate p-2 h-20',
              'react-table-data-row',
              // row.getIsSelected() ? '!hover:bg-blue-300 !bg-blue-400' : '',
              row.getIsSelected() && 'react-table-data-row-selected',
              // index % 2 === 0 && 'bg-[#f5f7fa]',
            )}
          >
            {row.getVisibleCells().map((cell) => {
              const handleCellClickOrKeyDown = (e) => {
                if (e.type === 'click' || (['Enter', 'NumpadEnter'].includes(e.code) && !e.shiftKey)) {
                  e.preventDefault();

                  onCellClick?.({ cell, row });
                }
              };

              return (
                <td
                  key={cell.id}
                  onClick={handleCellClickOrKeyDown}
                  onKeyDown={handleCellClickOrKeyDown}
                  className='react-table-data-cell'
                  style={{ width: cell.column.getSize() || '100%' }}
                  // @ts-ignore
                  align={cell.column.columnDef.meta?.align}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        );
      })}
      {virtualPaddingBottom > 0 && (
        <tr>
          <td style={{ height: `${virtualPaddingBottom}px` }} />
        </tr>
      )}
    </tbody>
  );
}
