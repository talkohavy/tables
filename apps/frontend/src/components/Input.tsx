import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import { wrapInDebounce } from '../utils/wrapInDebounce';

type InputProps = {
  type?: string;
  value?: any;
  setValue: (value: any) => void;
  defaultValue?: any;
  placeholder?: string;
  debounceTime?: number;
  className?: string;
  dontChangeRule?: (e: any, newValue: any) => { change: boolean; newValue: string };
};

export default function Input(props: InputProps) {
  const {
    type = 'text',
    value: outerValue,
    setValue,
    dontChangeRule = (_e: any, newValue) => ({ change: true, newValue }),
    placeholder,
    debounceTime,
    className,
    ...restProps
  } = props;

  const [innerValue, setInnerValue] = useState(() => outerValue);

  useEffect(() => {
    setInnerValue(outerValue);
  }, [outerValue]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setOuterValue = useCallback(
    Number.isInteger(debounceTime) ? wrapInDebounce(setValue, debounceTime) : setValue,
    [debounceTime, setValue],
  );

  const onChange = useCallback(
    (e: any) => {
      const { change, newValue } = dontChangeRule(e, e.target.value);
      if (change) {
        setInnerValue(newValue);
        setOuterValue(newValue);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue, dontChangeRule],
  );

  return (
    <input
      {...restProps}
      type={type}
      value={innerValue}
      placeholder={placeholder}
      onChange={onChange}
      className={clsx(
        'h-10 w-full rounded-md border border-black px-2 hover:border-blue-400 focus:border-blue-600 dark:bg-slate-900 dark:text-white',
        className,
      )}
    />
  );
}
