import IndeterminateCheckbox from '../IndeterminateCheckbox';

/**
 * @param {{
 *   table:any,
 *   header:any
 * }} props
 */
export default function ColumnHeader(props) {
  const { table, header } = props;

  return (
    <>
      <IndeterminateCheckbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
      <div className='w-full first-letter:uppercase'>{header}</div>
    </>
  );
}
