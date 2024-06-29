import Button from '../../Button';

type TableButtonProps = {
  label: any;
  onClick: () => void;
  isDisabled: boolean;
};

export default function TableButton(props: TableButtonProps) {
  const { label, onClick, isDisabled } = props;

  return (
    <Button
      onClick={onClick}
      isDisabled={isDisabled}
      className='rounded border px-3 py-2 hover:bg-slate-200 active:bg-slate-300'
    >
      {label}
    </Button>
  );
}
