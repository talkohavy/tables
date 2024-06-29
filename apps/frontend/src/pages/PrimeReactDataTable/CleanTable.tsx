import { useMemo } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { dummyData } from '../AgGrid/dummyData';
import Badge from './Badge';
import RankingStars from './RankingStars';

const defaultColumnDefs = { sortable: true, filter: true, className: 'text-sm font-light' };

export default function CleanTable() {
  const columnsInfo = useMemo(
    () => [
      { field: 'athlete', header: 'Athlete' },
      { field: 'age', header: 'Age' },
      { field: 'country', header: 'Country', hide: false, filter: true },
      { field: 'year', header: 'Year' },
      { field: 'date', header: 'Date' },
      { field: 'sport', header: 'Sport' },
      { field: 'isVerified', header: 'Is Verified' },
      { field: 'status', header: 'Status', body: Badge },
      { field: 'rank', header: 'Rank', body: RankingStars },
    ],
    [],
  );

  return (
    <div className='w-full max-w-full rounded-xl border border-[#dfe7ef] bg-white p-8 shadow-md dark:border-neutral-400 dark:bg-[#2b323d]'>
      <DataTable
        virtualScrollerOptions={
          {
            // autoSize: true, // defaults to false.
            // delay: 150, // defaults to 0
            // showLoader: true, // defaults to false.
            // lazy: true, // defaults to false.
            // disabled: true,
          }
        }
        scrollable
        scrollHeight='800px'
        value={dummyData}
        tableStyle={{ minWidth: '50rem' }}
        // ########
        // Sorting:
        // ########
        sortMode='single'
        sortField='athlete' // <--- pre-sort by
        sortOrder={1}
        removableSort // <--- defaults to false. When removableSort is present, the third click removes the sorting from the column.
        // ######
        // Misc.:
        // ######
        className='flex flex-col gap-4'
        emptyMessage='No users found'
        stripedRows
        showGridlines
        resizableColumns
      >
        {columnsInfo.map((columnsProps) => (
          <Column key={columnsProps.field} {...defaultColumnDefs} {...columnsProps} />
        ))}
      </DataTable>
    </div>
  );
}
