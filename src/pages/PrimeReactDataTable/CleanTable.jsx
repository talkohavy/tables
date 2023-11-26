import { useMemo } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { dummyData } from '../AgGrid/dummyData';
import Badge from './Badge';
import RankingStars from './RankingStars';

export default function CleanTable() {
  const columnsInfo = useMemo(
    () => [
      { field: 'athlete', header: 'Athlete', sortable: true, filter: true, filterPlaceholder: 'Search by name' },
      { field: 'age', header: 'Age', sortable: true, filter: true, filterPlaceholder: 'Search by name' },
      { field: 'country', header: 'Country', hide: false, filter: true, filterPlaceholder: 'Search by name' },
      {
        field: 'year',
        header: 'Year',
        sortable: true,
        filter: true,
        filterPlaceholder: 'Search by year',
        filterMenuStyle: { width: '14rem' },
      },
      {
        field: 'date',
        header: 'Date',
        sortable: true,
        filter: true,
        filterPlaceholder: 'Search by name',
        // filterElement: {}, // representativeRowFilterTemplate
      },
      {
        field: 'sport',
        header: 'Sport',
        sortable: true,
        filter: true,
        filterPlaceholder: 'Search by name',
        showFilterMenu: false,
        filterMenuStyle: { width: '14rem' },
      },
      {
        field: 'gold',
        header: 'Gold',
        sortable: true,
        filter: true,
        filterPlaceholder: 'is Gold',
        dataType: 'boolean',
      },
      { field: 'silver', header: 'Silver', sortable: true, filter: true, filterPlaceholder: 'Search by name' },
      {
        field: 'bronze',
        header: 'Bronze',
        body: Badge,
        sortable: true,
        filter: true,
        filterPlaceholder: 'Search by name',
      },
      {
        field: 'total',
        header: 'Total',
        body: RankingStars,
        sortable: true,
        filter: true,
        filterPlaceholder: 'Search by name',
      },
    ],
    [],
  );

  return (
    <div className='w-full max-w-full border border-[#dfe7ef] rounded-xl p-8 bg-white shadow-md dark:bg-[#2b323d] dark:border-neutral-400'>
      <DataTable
        virtualScrollerOptions={{ itemSize: 46 }}
        scrollable
        scrollHeight='400px'
        value={dummyData}
        tableStyle={{ minWidth: '50rem' }}
        // ########
        // Sorting:
        // ########
        sortMode='single'
        sortField='athlete' // <--- pre-sort by
        sortOrder={1}
        removableSort={true} // <--- defaults to false. When removableSort is present, the third click removes the sorting from the column.
        // ########
        // Filters:
        // ########
        dataKey='id'
        filters={{}}
        filterDisplay='row'
        globalFilterFields={['athlete', 'age', 'country', 'year']}
        // ###########
        // Pagination:
        // ###########
        // paginator
        // rows={24}
        // rowsPerPageOptions={[5, 10, 25, 50]}
        // paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
        // currentPageReportTemplate='Showing {first} to {last} of {totalRecords} users'
        // ######
        // Misc.:
        // ######
        className='flex flex-col gap-4'
        emptyMessage='No users found'
        // stripedRows
        // showGridlines
        // loading={true}
        resizableColumns
      >
        {columnsInfo
          .filter(({ hide }) => !hide)
          .map((props) => (
            <Column key={props.field} {...props} className='text-sm font-light' />
          ))}
      </DataTable>
    </div>
  );
}
