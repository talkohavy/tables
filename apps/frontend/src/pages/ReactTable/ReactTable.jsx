import { useRef } from 'react';
import Table from '../../components/Table/index';

/**
 * @typedef {{
 *   id: string | number,
 *   firstName: string,
 *   lastName: string,
 *   age: number,
 * }} Person
 */

/**
 * @type {Array<Person>}
 */
const data = [
  {
    id: 1,
    firstName: 'tal',
    lastName: 'kohavy',
    age: 28,
  },
  {
    id: 2,
    firstName: 'tania',
    lastName: 'kohavy',
    age: 22,
  },
  {
    id: 3,
    firstName: 'daniel',
    lastName: 'kohavy',
    age: 16,
  },
];

export default function ReactTable() {
  const tableRef = useRef(null);

  return (
    <div>
      <Table
        ref={tableRef}
        data={data}
        columnDefs={[
          { accessorKey: 'id', addCheckbox: true },
          { accessorKey: 'firstName' },
          { accessorKey: 'lastName' },
        ]}
        rowSelectionMode='multi'
        className='h-96 w-96 rounded-lg border border-black p-2'
      />
    </div>
  );
}
