import CleanTable from './CleanTable';
import ExpandableRowsTable from './ExpandableRowsTable';
import SelectionTable from './SelectionTable';

export default function PrimeReactDataTable() {
  return (
    <div className='flex flex-col justify-start items-center gap-4 p-10 w-full bg-[#eff3f7] dark:bg-[#383838]'>
      <div className='text-5xl dark:text-white'>SelectionTable</div>
      <SelectionTable />

      <div className='text-5xl dark:text-white'>CleanTable</div>
      <CleanTable />

      <div className='text-5xl dark:text-white'>ExpandableRowsTable</div>
      <ExpandableRowsTable />
    </div>
  );
}
