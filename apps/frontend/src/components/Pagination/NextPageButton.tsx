import clsx from 'clsx';

type NextPageButtonProps = {
  curPage: number;
  setCurPage: (value: number) => void;
  numOfPages: number;
};

export default function NextPageButton(props: NextPageButtonProps) {
  const { curPage, setCurPage, numOfPages } = props;

  return (
    <span
      className={clsx(
        'flex size-7 cursor-pointer select-none items-center justify-center rounded-full bg-gray-600 pb-1 text-center text-lg text-white dark:bg-amber-400 dark:text-black',
        curPage == numOfPages
          ? 'cursor-default bg-neutral-300 dark:bg-transparent'
          : 'hover:bg-black active:bg-gray-400 dark:hover:bg-black dark:hover:text-white dark:active:bg-yellow-600',
      )}
      onClick={() => curPage < numOfPages && setCurPage(curPage + 1)}
    >
      »
    </span>
  );
}
