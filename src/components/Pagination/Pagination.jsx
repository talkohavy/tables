import React, { useMemo } from 'react';
import clsx from 'clsx';
import { STRATEGY, getDisplayType } from './constants';
import MoveToPageLink from './MoveToPageLink';
import NextPageButton from './NextPageButton';
import PreviousPageButton from './PreviousPageButton';
import ThreeDots from './ThreeDots';

export default function Pagination({ curPage, setCurPage, totalNumOfItems, perPage }) {
  // all useStates:
  const numOfPages = useMemo(() => Math.ceil(totalNumOfItems / perPage), [totalNumOfItems, perPage]);
  const pageNumbersArr = useMemo(() => Array.from(Array(numOfPages).keys()).map((index) => index + 1), [numOfPages]);

  // all useMemos:
  const currentPage = useMemo(() => parseInt(curPage), [curPage]);
  const paginationLinks = useMemo(() => {
    const displayType = getDisplayType({ curPage: currentPage, numOfPages });
    return STRATEGY[displayType]({ curPage: currentPage, numOfPages, pageNumbersArr });
  }, [numOfPages, currentPage, pageNumbersArr]);

  return (
    <div className='flex h-10 w-full max-w-xl items-center justify-around dark:text-white'>
      {numOfPages ? (
        <>
          <PreviousPageButton currentPage={currentPage} setCurPage={setCurPage} />

          {paginationLinks.map(({ isThreeDots, isCurrentPage, pageNumber }) =>
            isThreeDots ? (
              <ThreeDots key={pageNumber} />
            ) : (
              <MoveToPageLink
                key={pageNumber}
                pageNumber={pageNumber}
                onClick={() => !isCurrentPage && setCurPage(pageNumber)}
                className={clsx(
                  'w-auto rounded-md px-2 py-1 text-lg no-underline',
                  isCurrentPage
                    ? 'cursor-default bg-red-500 text-white'
                    : 'cursor-pointer hover:bg-slate-200 dark:hover:bg-red-800'
                )}
              />
            )
          )}

          <NextPageButton curPage={currentPage} setCurPage={setCurPage} numOfPages={numOfPages} />
        </>
      ) : null}
    </div>
  );
}
