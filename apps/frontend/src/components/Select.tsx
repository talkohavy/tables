import clsx from 'clsx';

type SelectProps = {
  value: any;
  setValue: (value: any) => void;
  options: Array<any>;
  className?: string;
};

export default function Select(props: SelectProps) {
  const { value, setValue, options, className = undefined } = props;
  return (
    <select
      value={value}
      onChange={setValue}
      className={clsx('h-8 cursor-pointer rounded-md border hover:border-blue-400 focus:border-blue-600', className)}
    >
      {options.map(({ key, value, label }) => (
        <option key={key ?? value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
