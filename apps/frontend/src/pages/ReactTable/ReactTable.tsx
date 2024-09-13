import { useRef } from 'react';
import Table from '../../components/Table/index';
import { mockData } from '../../mockData';

export default function ReactTable() {
  const tableRef = useRef(null);

  return (
    <div>
      <Table
        ref={tableRef}
        data={mockData}
        columnDefs={[
          { accessorKey: 'id', addCheckbox: true },
          { accessorKey: 'first_name' },
          { accessorKey: 'last_name' },
        ]}
        rowSelectionMode='multi'
        className='size-96 rounded-lg border border-black p-2'
      />
    </div>
  );
}
