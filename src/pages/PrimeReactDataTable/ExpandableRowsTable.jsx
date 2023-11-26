import { useMemo, useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { dummyData } from '../AgGrid/dummyData';
import Badge from './Badge';
import ExpandCollapseButton from './ExpandCollapseButton';
import RankingStars from './RankingStars';

const onRowExpand = (event) => {
  console.log({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
};

const onRowCollapse = (event) => {
  console.log({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
};

export default function ExpandableRowsTable() {
  const [expandedRows, setExpandedRows] = useState(null);

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

  const expandAll = () => {
    let _expandedRows = {};

    dummyData.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
  };

  const collapseAll = () => {
    setExpandedRows(null);
  };

  const header = (
    <div className='flex flex-wrap justify-content-end gap-2'>
      <ExpandCollapseButton label='+ Expand All' onClick={expandAll} />
      <ExpandCollapseButton label='- Collapse All' onClick={collapseAll} />
    </div>
  );

  const canBeExpanded = (rowData) => rowData?.orders?.length > 0;

  const rowExpansionTemplate = (data) => {
    console.log({ data });

    return (
      <div className='p-3'>
        <h5>Orders for {data.name}</h5>
        <DataTable value={data.orders}>
          <Column field='id' header='Id' sortable></Column>
          <Column field='customer' header='Customer' sortable></Column>
          <Column field='date' header='Date' sortable></Column>
          <Column field='amount' header='Amount' body={() => 'hello'} sortable></Column>
          <Column field='status' header='Status' body={() => 'hello'} sortable></Column>
          <Column headerStyle={{ width: '4rem' }} body={() => 'hello'}></Column>
        </DataTable>
      </div>
    );
  };

  return (
    <div className='flex flex-col justify-start items-center gap-4 p-10 w-full bg-[#eff3f7] dark:bg-[#383838]'>
      <div className='w-full max-w-full border border-[#dfe7ef] rounded-xl p-8 bg-white shadow-md dark:bg-[#2b323d] dark:border-neutral-400'>
        <DataTable
          virtualScrollerOptions={{ itemSize: 46 }}
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
          // ##############
          // Row Expansion:
          // ##############
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          onRowExpand={onRowExpand}
          onRowCollapse={onRowCollapse}
          rowExpansionTemplate={rowExpansionTemplate}
          header={header}
          className='flex flex-col gap-4'
          emptyMessage='No users found'
        >
          <Column expander={canBeExpanded} style={{ width: '5rem' }} />

          {columnsInfo
            .filter(({ hide }) => !hide)
            .map((props) => (
              <Column key={props.field} {...props} className='text-sm font-light' />
            ))}
        </DataTable>
      </div>
    </div>
  );
}
