import { MouseEventHandler } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  onMouseOver?: () => void;
  isDisabled?: boolean;
  className?: string;
  style?: any;
  testId?: string;
};

export default function Button(props: ButtonProps) {
  const { children, onClick, onMouseOver, isDisabled, className, style, testId } = props;

  return (
    <button
      type='button'
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={isDisabled}
      className={clsx('flex cursor-pointer items-center justify-center', className)}
      style={style}
      data-test-id={`${testId}Button`}
    >
      {children}
    </button>
  );
}
