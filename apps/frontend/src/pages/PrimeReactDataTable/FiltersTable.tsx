import { useMemo, useState } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { MultiSelect } from 'primereact/multiselect';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { dummyData } from '../../../../backend/dummyData';
import Badge from './Badge';
import RankingStars from './RankingStars';

const initialFiltersState = {
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  athlete: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  age: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  country: { value: null, matchMode: FilterMatchMode.EQUALS },
  year: { value: null, matchMode: FilterMatchMode.EQUALS },
  date: { value: null, matchMode: FilterMatchMode.EQUALS },
  sport: { value: null, matchMode: FilterMatchMode.EQUALS },
  isVerified: { value: null, matchMode: FilterMatchMode.EQUALS },
};

const defaultColumnDefs = {
  className: 'text-sm font-light',
  headerClassName: 'stickyToTopTableHeaders',
};

export default function FiltersTable() {
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const [filters, setFilters] = useState(initialFiltersState);

  const onGlobalFilterChange = (value) => {
    const _filters = { ...filters };
    _filters['global'].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const clearFilter = () => {
    setFilters(initialFiltersState);
    setGlobalFilterValue('');
  };

  function TableHeader() {
    return (
      <div className='flex justify-between'>
        <Button onClick={clearFilter}>Clear</Button>
        <span className='p-input-icon-left'>
          <i className='pi pi-search' />
          <Input value={globalFilterValue} setValue={(e) => onGlobalFilterChange(e)} placeholder='Keyword Search' />
        </span>
      </div>
    );
  }

  const sportItemTemplate = (option) => <span>{option.label}</span>;
  const sportRowFilterTemplate = (options) => (
    <MultiSelect
      value={options.value}
      options={[
        { value: 'Swimming', label: 'Swimming' },
        { value: 'Gymnastics', label: 'Gymnastics' },
      ]}
      itemTemplate={sportItemTemplate}
      onChange={(e) => options.filterApplyCallback(e.value)}
      optionLabel='label'
      placeholder='Any'
      className='p-column-filter'
      maxSelectedLabels={1}
      style={{ minWidth: '14rem' }}
    />
  );

  const columnsInfo = useMemo(
    () => [
      { field: 'athlete', header: 'Athlete', sortable: true, filter: true, filterPlaceholder: 'Search by name' },
      { field: 'age', header: 'Age', sortable: true, filter: true, filterPlaceholder: 'Search by age' },
      { field: 'country', header: 'Country', filter: true, filterPlaceholder: 'Search by country' },
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
        filterPlaceholder: 'Search by date',
      },
      {
        field: 'sport',
        header: 'Sport',
        sortable: true,
        filter: true,
        filterPlaceholder: 'Search by sport',
        filterElement: sportRowFilterTemplate,
        filterMenuStyle: { width: '14rem' },
      },
      {
        field: 'isVerified',
        header: 'Is Verified',
        sortable: true,
        filter: true,
        filterPlaceholder: 'Is Verified',
        // showFilterMenu: false,
        dataType: 'boolean', // 'text' | 'numeric' | 'date'. Depending on the dataType of the column, suitable match modes are displayed.
      },
      {
        field: 'status',
        header: 'Status',
        body: Badge,
        sortable: true,
        filter: true,
        filterPlaceholder: 'Search by status',
      },
      {
        field: 'rank',
        header: 'Rank',
        body: RankingStars,
        sortable: true,
        filter: true,
        filterPlaceholder: 'Search by rank',
      },
    ],
    [],
  );

  return (
    <div className='w-full max-w-full border border-[#dfe7ef] rounded-xl p-8 bg-white shadow-md dark:bg-[#2b323d] dark:border-neutral-400'>
      <DataTable
        header={TableHeader}
        virtualScrollerOptions={{ itemSize: 46 }}
        dataKey='id'
        value={dummyData}
        tableStyle={{ minWidth: '50rem' }}
        scrollHeight='400px'
        scrollable
        // ########
        // Filters:
        // ########
        filters={filters}
        globalFilterFields={['athlete', 'age', 'country', 'year', 'sport']}
        filterDisplay='row' // <--- row or menu (default)
        // ########
        // Sorting:
        // ########
        sortMode='single'
        sortField='athlete' // <--- pre-sort by
        sortOrder={1}
        removableSort={true} // <--- defaults to false. When removableSort is present, the third click removes the sorting from the column.
        // ######
        // Misc.:
        // ######
        emptyMessage='No users found'
        stripedRows
        showGridlines
        resizableColumns
      >
        {columnsInfo.map((props) => (
          <Column key={props.field} {...defaultColumnDefs} {...props} />
        ))}
      </DataTable>
    </div>
  );
}
