import Button from '../../components/Button';

export default function ExpandCollapseButton({ label, onClick }) {
  return (
    <Button
      onClick={onClick}
      className='dark:text-cyan-500 border dark:border-cyan-500 p-4 rounded-xl hover:rounded-2xl dark:hover:bg-neutral-50/10 hover:bg-cyan-200/50'
    >
      {label}
    </Button>
  );
}
