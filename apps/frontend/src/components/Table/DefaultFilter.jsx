export default function DefaultFilter({ table, column }) {
  const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === 'number' ? (
    <div className='flex gap-x-2'>
      <input
        type='number'
        value={columnFilterValue?.[0] ?? ''}
        onChange={(e) => column.setFilterValue((old) => [e.target.value, old?.[1]])}
        placeholder='Min'
        className='w-24 rounded border shadow'
      />
      <input
        type='number'
        value={columnFilterValue?.[1] ?? ''}
        onChange={(e) => column.setFilterValue((old) => [old?.[0], e.target.value])}
        placeholder='Max'
        className='w-24 rounded border shadow'
      />
    </div>
  ) : (
    <input
      type='text'
      value={columnFilterValue}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder='Search...'
      className='w-36 rounded border px-1 text-black shadow dark:text-white'
    />
  );
}
