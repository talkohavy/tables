import clsx from 'clsx';

type PreviousPageButton = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export default function PreviousPageButton(props: PreviousPageButton) {
  const { currentPage, setCurrentPage } = props;

  return (
    <span
      className={clsx(
        'flex size-7 cursor-pointer select-none items-center justify-center rounded-full bg-gray-600 pb-1 text-center text-lg text-white',
        currentPage == 1 ? 'cursor-default bg-neutral-300 dark:bg-transparent' : 'hover:bg-black active:bg-gray-400',
      )}
      onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
    >
      «
    </span>
  );
}
