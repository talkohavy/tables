// @ts-nocheck
import { useEffect, useMemo, useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import Badge from './Badge';
import RankingStars from './RankingStars';

const defaultColumnDefs = { sortable: true, filter: true, className: 'text-sm font-light' };

export default function PaginationTable() {
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [customers, setCustomers] = useState(null);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [lazyState, setLazyState] = useState<any>({
    first: 0,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null,
    filters: {
      name: { value: '', matchMode: 'contains' },
      'country.name': { value: '', matchMode: 'contains' },
      company: { value: '', matchMode: 'contains' },
      'representative.name': { value: '', matchMode: 'contains' },
    },
  });

  let networkTimeout: any = null;

  useEffect(() => {
    loadLazyData();
  }, [lazyState]);

  const loadLazyData = () => {
    setLoading(true);

    if (networkTimeout) clearTimeout(networkTimeout);

    // imitate delay of a backend call
    networkTimeout = setTimeout(
      () => {
        CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyState) }).then((data) => {
          setTotalRecords(data.totalRecords);
          setCustomers(data.customers);
          setLoading(false);
        });
      },
      Math.random() * 1000 + 250,
    );
  };

  const onPage = (event: any) => setLazyState(event);
  const onSort = (event: any) => setLazyState(event);
  const onFilter = (event: any) => {
    event.first = 0;
    setLazyState(event);
  };

  const onSelectionChange = (event: any) => {
    const { value } = event;

    setSelectedCustomers(value);
    setSelectAll(value.length === totalRecords);
  };

  const onSelectAllChange = (event: any) => {
    const selectAll = event.checked;

    if (selectAll) {
      CustomerService.getCustomers().then((data: any) => {
        setSelectAll(true);
        setSelectedCustomers(data.customers);
      });
    } else {
      setSelectAll(false);
      setSelectedCustomers([]);
    }
  };

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
        value={customers}
        virtualScrollerOptions={{
          autoSize: true, // defaults to false.
          // delay: 150, // defaults to 0
          // showLoader: true, // defaults to false.
          // lazy: true, // defaults to false.
        }}
        scrollable
        scrollHeight='800px'
        tableStyle={{ minWidth: '50rem' }}
        // ################
        // Lazy Pagination:
        // ################
        lazy
        paginator
        first={lazyState.first}
        rows={24}
        totalRecords={totalRecords}
        onPage={onPage}
        onSort={onSort}
        sortField={lazyState.sortField}
        sortOrder={lazyState.sortOrder}
        onFilter={onFilter}
        filters={lazyState.filters}
        loading={loading}
        selection={selectedCustomers}
        onSelectionChange={onSelectionChange}
        selectAll={selectAll}
        onSelectAllChange={onSelectAllChange}
        // ########
        // Sorting:
        // ########
        // sortMode='single'
        // sortField='athlete' // <--- pre-sort by
        // sortOrder={1}
        removableSort // <--- defaults to false. When removableSort is present, the third click removes the sorting from the column.
        // ######
        // Misc.:
        // ######
        dataKey='id'
        emptyMessage='No users found'
        stripedRows
        showGridlines
        resizableColumns
        className='flex flex-col gap-4'
      >
        {columnsInfo.map((columnsProps) => (
          <Column key={columnsProps.field} {...defaultColumnDefs} {...columnsProps} />
        ))}
      </DataTable>
    </div>
  );
}
