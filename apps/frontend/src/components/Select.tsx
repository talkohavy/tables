import React from 'react';
import clsx from 'clsx';

export default function Select({ value, setValue, options, placeholder = '', className = undefined }) {
  return (
    <select
      value={value}
      onChange={setValue}
      className={clsx('h-8 cursor-pointer rounded-md border hover:border-blue-400 focus:border-blue-600', className)}
      placeholder={placeholder}
    >
      {options.map(({ key, value, label }) => (
        <option key={key ?? value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
