import { useMemo, useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputSwitch } from 'primereact/inputswitch';
import { dummyData } from '../AgGrid/dummyData';
import Badge from './Badge';
import RankingStars from './RankingStars';

export default function SelectionTable() {
  const [isRowClickChecking, setIsRowClickChecking] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);

  const columnsInfo = useMemo(
    () => [
      { field: 'athlete', header: 'Athlete', sortable: true, filter: true, filterPlaceholder: 'Search by name' },
      { field: 'age', header: 'Age', sortable: true, filter: true, filterPlaceholder: 'Search by name' },
      { field: 'country', header: 'Country', filter: true, filterPlaceholder: 'Search by name' },
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
    <div className='flex w-full flex-col items-center justify-start gap-4 bg-[#eff3f7] p-10 dark:bg-[#383838]'>
      <div className='flex items-center justify-center gap-4'>
        <InputSwitch checked={isRowClickChecking} onChange={(e) => setIsRowClickChecking(e.value)} />
      </div>

      <div className='w-full max-w-full rounded-xl border border-[#dfe7ef] bg-white p-8 shadow-md dark:border-neutral-400 dark:bg-[#2b323d]'>
        {/* @ts-ignore */}
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
          removableSort // <--- defaults to false. When removableSort is present, the third click removes the sorting from the column.
          // ##############
          // Selection Mode:
          // ##############
          selectionMode={isRowClickChecking ? null : 'checkbox'}
          selection={selectedItems}
          onSelectionChange={(e: any) => setSelectedItems(e.value)}
          onRowSelect={() => console.log('row was selected!')}
          onRowUnselect={() => console.log('row was unselected!')}
          isDataSelectable={
            /**
             * @param {{ data: any, index: number }} props
             * @returns {boolean} To return false means that row is disabled.
             */
            (props) => props.index !== 3
          }
          metaKeySelection // decides if the multi-selection is enabled by default, or should the cmd/ctrl button be involved.
          // cellSelection // When enabling this, comment out the checkbox column, otherwise this would not work! More than one cell is selectable by setting selectionMode to multiple.
          emptyMessage='No users found'
          stripedRows
          showGridlines
        >
          {/* When setting selectionMode='checkbox', add this bottom line for a checkbox column */}
          <Column selectionMode='multiple' headerStyle={{ width: '3rem' }} />

          {columnsInfo
          // @ts-ignore
            .filter(({ hide }) => !hide)
            .map((props) => (
              <Column key={props.field} {...props} className='text-sm font-light' />
            ))}
        </DataTable>
      </div>
    </div>
  );
}
