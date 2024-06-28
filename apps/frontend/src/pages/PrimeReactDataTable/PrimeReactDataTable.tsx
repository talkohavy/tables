// import ExpandableRowsTable from './ExpandableRowsTable';
// import FiltersTable from './FiltersTable';
// import SelectionTable from './SelectionTable';

import CleanTable from './CleanTable';

export default function PrimeReactDataTable() {
  return (
    <div className='flex w-full flex-col items-center justify-start gap-4 bg-[#eff3f7] p-10 dark:bg-[#383838]'>
      {/* <div className='text-5xl dark:text-white'>FiltersTable</div>
      <FiltersTable />

      <div className='text-5xl dark:text-white'>SelectionTable</div>
      <SelectionTable /> */}

      <div className='text-5xl dark:text-white'>CleanTable</div>
      <CleanTable />

      {/* <div className='text-5xl dark:text-white'>ExpandableRowsTable</div>
      <ExpandableRowsTable /> */}
    </div>
  );
}
