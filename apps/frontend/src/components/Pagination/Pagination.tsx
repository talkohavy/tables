import { useMemo } from 'react';
import clsx from 'clsx';
import { STRATEGY, STRATEGY_NAME, getDisplayType } from './constants';
import MoveToPageLink from './MoveToPageLink';
import NextPageButton from './NextPageButton';
import PreviousPageButton from './PreviousPageButton';
import ThreeDots from './ThreeDots';

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalNumOfItems: number;
  perPage: number;
};

export default function Pagination(props: PaginationProps) {
  const { currentPage, setCurrentPage, totalNumOfItems, perPage } = props;

  // all useStates:
  const numOfPages = useMemo(() => Math.ceil(totalNumOfItems / perPage), [totalNumOfItems, perPage]);
  const pageNumbersArr = useMemo(() => Array.from(Array(numOfPages).keys()).map((index) => index + 1), [numOfPages]);

  // all useMemos:
  const paginationLinks = useMemo(() => {
    const displayType = getDisplayType({ curPage: currentPage, numOfPages });
    return STRATEGY[displayType as STRATEGY_NAME]({ curPage: currentPage, numOfPages, pageNumbersArr });
  }, [numOfPages, currentPage, pageNumbersArr]);

  return (
    <div className='flex h-10 w-full max-w-xl items-center justify-around dark:text-white'>
      {numOfPages ? (
        <>
          <PreviousPageButton currentPage={currentPage} setCurrentPage={setCurrentPage} />

          {paginationLinks.map(({ isThreeDots, isCurrentPage, pageNumber }) =>
            isThreeDots ? (
              <ThreeDots key={pageNumber} />
            ) : (
              <MoveToPageLink
                key={pageNumber}
                pageNumber={pageNumber!}
                onClick={() => !isCurrentPage && setCurrentPage(pageNumber!)}
                className={clsx(
                  'w-auto rounded-md px-2 py-1 text-lg no-underline',
                  isCurrentPage
                    ? 'cursor-default bg-red-500 text-white'
                    : 'cursor-pointer hover:bg-slate-200 dark:hover:bg-red-800',
                )}
              />
            ),
          )}

          <NextPageButton curPage={currentPage} setCurPage={setCurrentPage} numOfPages={numOfPages} />
        </>
      ) : null}
    </div>
  );
}
