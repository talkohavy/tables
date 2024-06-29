import IndeterminateCheckbox from '../IndeterminateCheckbox';

type ColumnHeaderProps = {
  table: any;
  header: any;
};

export default function ColumnHeader(props: ColumnHeaderProps) {
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
