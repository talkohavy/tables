import { MouseEventHandler } from 'react';
import Button from '../../components/Button';

type ExpandCollapseButtonProps = {
  label: string | JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function ExpandCollapseButton(props: ExpandCollapseButtonProps) {
  const { label, onClick } = props;

  return (
    <Button
      onClick={onClick}
      className='rounded-xl border p-4 hover:rounded-2xl hover:bg-cyan-200/50 dark:border-cyan-500 dark:text-cyan-500 dark:hover:bg-neutral-50/10'
    >
      {label}
    </Button>
  );
}
