import { useEffect, useRef } from 'react';
import clsx from 'clsx';

type IndeterminateCheckboxProps = {
  indeterminate: any;
  checked: boolean;
  className?: string;
  onChange?: () => any;
};

export default function IndeterminateCheckbox(props: IndeterminateCheckboxProps) {
  const { indeterminate, checked, onChange, className = '', ...rest } = props;

  const inputRef = useRef(null);

  useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      (inputRef.current as any).indeterminate = !checked && indeterminate;
    }
  }, [indeterminate, checked]);

  return (
    <input
      ref={inputRef}
      type='checkbox'
      checked={checked}
      className={clsx('cursor-pointer', className)}
      onChange={onChange}
      {...rest}
    />
  );
}
