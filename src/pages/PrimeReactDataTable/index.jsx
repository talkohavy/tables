import { useMemo, useState } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import Select from '../../components/Select';
import { dummyData } from '../AgGrid/dummyData';

const OPTIONS = [
  { value: 'small', label: 'small' },
  { value: 'normal', label: 'normal' },
  { value: 'large', label: 'large' },
];

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

export default function PrimeReactDataTable() {
  const [tableSize, setTableSize] = useState('small');
  const [hideCountry, setHideCountry] = useState(false);

  const columnsInfo = useMemo(
    () => [
      { field: 'athlete', header: 'Athlete', sortable: true },
      { field: 'age', header: 'Age', sortable: true },
      { field: 'country', header: 'Country', hide: hideCountry },
      { field: 'year', header: 'Year' },
      { field: 'date', header: 'Date' },
      { field: 'sport', header: 'Sport' },
      { field: 'gold', header: 'Gold' },
      { field: 'silver', header: 'Silver' },
      { field: 'bronze', header: 'Bronze' },
      { field: 'total', header: 'Total' },
    ],
    [hideCountry],
  );

  return (
    <div className='flex flex-col justify-start items-center gap-4 p-10 w-full bg-[#eff3f7]'>
      <div className='flex justify-center items-center gap-4'>
        <Select
          value={tableSize}
          setValue={(e) => setTableSize(e.target.value)}
          placeholder='hello'
          options={OPTIONS}
        />
        <button
          type='button'
          onClick={() => setHideCountry(!hideCountry)}
          className='h-10 w-40 bg-red-400 rounded-xl hover:bg-red-300'
        >
          Hide/Show Country
        </button>
      </div>

      <div className='w-full max-w-4xl border border-[#dfe7ef] rounded-xl p-8 bg-white shadow-md'>
        <DataTable
          // header={TableHeader}
          // footer={TableFooter}
          value={dummyData}
          tableStyle={{ minWidth: '50rem' }}
          sortOrder={1}
          sortField='athlete'
          // size={tableSize}
          className='flex flex-col gap-4'
          paginatorTemplate='FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown'
          emptyMessage='No data found'
          currentPageReportTemplate='Showing {first} to {last} of {totalRecords} users'
          rows={10}
          stripedRows
          showGridlines
          paginator
        >
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
