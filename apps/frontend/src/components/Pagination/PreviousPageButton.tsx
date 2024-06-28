import React from 'react';
import clsx from 'clsx';

export default function PreviousPageButton({ currentPage, setCurPage }) {
  return (
    <span
      className={clsx(
        'flex h-7 w-7 cursor-pointer select-none items-center justify-center rounded-full bg-gray-600 pb-1 text-center text-lg text-white',
        currentPage == 1 ? 'cursor-default bg-neutral-300 dark:bg-transparent' : 'hover:bg-black active:bg-gray-400'
      )}
      onClick={() => currentPage > 1 && setCurPage(currentPage - 1)}
    >
      «
    </span>
  );
}
