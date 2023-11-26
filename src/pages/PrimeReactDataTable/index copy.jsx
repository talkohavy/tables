import { useMemo, useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputSwitch } from 'primereact/inputswitch';
import { dummyData } from '../AgGrid/dummyData';
import Badge from './Badge';
import ExpandCollapseButton from './ExpandCollapseButton';
import RankingStars from './RankingStars';

// function TableHeader() {
//   return (
//     <div className='flex justify-center items-center bg-orange-50 h-14 rounded-xl'>
//       <div className='text-3xl font-bold'>My Black List</div>
//     </div>
//   );
// }

// function TableFooter() {
//   return (
//     <div className='flex justify-start items-center h-10 p-5'>
//       <div className='text-lg font-bold'>Found 50 Results</div>
//     </div>
//   );
// }
const onRowExpand = (event) => {
  console.log({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
};

const onRowCollapse = (event) => {
  console.log({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
};

// const expandAll = () => {
//   let _expandedRows = {};

//   products.forEach((p) => (_expandedRows[`${p.id}`] = true));

//   setExpandedRows(_expandedRows);
// };

export default function PrimeReactDataTable() {
  const [expandedRows, setExpandedRows] = useState(null);
  const [isRowClickChecking, setIsRowClickChecking] = useState(false);
  // const [selectedItems, setSelectedItems] = useState(null);
  const [hideCountry, setHideCountry] = useState(false);

  const columnsInfo = useMemo(
    () => [
      { field: 'athlete', header: 'Athlete', sortable: true, filter: true, filterPlaceholder: 'Search by name' },
      { field: 'age', header: 'Age', sortable: true, filter: true, filterPlaceholder: 'Search by name' },
      { field: 'country', header: 'Country', hide: hideCountry, filter: true, filterPlaceholder: 'Search by name' },
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
    [hideCountry],
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

  const canBeExpanded = (rowData) => {
    if (rowData?.orders?.length > 0) {
      console.log('true!');
    }

    return rowData?.orders?.length > 0;
  };

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
      <div className='flex justify-center items-center gap-4'>
        <button
          type='button'
          onClick={() => setHideCountry(!hideCountry)}
          className='h-10 w-40 bg-red-400 rounded-xl hover:bg-red-300'
        >
          Hide/Show Country
        </button>
        <InputSwitch checked={isRowClickChecking} onChange={(e) => setIsRowClickChecking(e.value)} />
      </div>

      <div className='w-full max-w-full border border-[#dfe7ef] rounded-xl p-8 bg-white shadow-md dark:bg-[#2b323d] dark:border-neutral-400'>
        <DataTable
          virtualScrollerOptions={{ itemSize: 46 }}
          // header={TableHeader}
          // footer={TableFooter}
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
          // Selection Mode:
          // ##############
          // selectionMode={isRowClickChecking ? null : 'checkbox'}
          // selection={selectedItems}
          // onSelectionChange={(e) => setSelectedItems(e.value)}
          // onRowSelect={() => console.log('row was selected!')}
          // onRowUnselect={() => console.log('row was unselected!')}
          // isDataSelectable={
          //   /**
          //    * @param {{ data: any, index: number }} props
          //    * @returns {boolean} To return false means that row is disabled.
          //    */
          //   (props) => props.index !== 3
          // }
          // metaKeySelection={true} // decides if the multi-selection is enabled by default, or should the cmd/ctrl button be involved.
          // cellSelection // When enabling this, comment out the checkbox column, otherwise this would not work! More than one cell is selectable by setting selectionMode to multiple.
          // ###########
          // Pagination:
          // ###########
          // paginator
          // rows={24}
          // rowsPerPageOptions={[5, 10, 25, 50]}
          // paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
          // currentPageReportTemplate='Showing {first} to {last} of {totalRecords} users'
          // ##############
          // Row Expansion:
          // ##############
          expandedRows={expandedRows}
          // @ts-ignore
          onRowToggle={(e) => setExpandedRows(e.data)}
          onRowExpand={onRowExpand}
          onRowCollapse={onRowCollapse}
          rowExpansionTemplate={rowExpansionTemplate}
          header={header}
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
          {/* When setting selectionMode='checkbox', add this bottom line for a checkbox column */}
          {/* <Column selectionMode='multiple' headerStyle={{ width: '3rem' }}></Column> */}

          {/* When setting selectionMode='checkbox', add this bottom line for a checkbox column */}
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
