import TableButton from './TableButton';

type PaginationProps = {
  onPrevClick: () => any;
  onNextClick: () => any;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  currentPage: any;
  totalNumOfPages: any;
  onFirstPageClick: () => any;
  onLastPageClick: () => any;
  totalItemsLoadedCount: number;
  totalItemsOverallCount: number;
  fetchNextPage: () => any;
  pagesLoaded: Array<number>;
};

export default function Pagination(props: PaginationProps) {
  const {
    onPrevClick,
    onNextClick,
    isPrevDisabled,
    isNextDisabled,
    currentPage,
    totalNumOfPages,
    onFirstPageClick,
    onLastPageClick,
    totalItemsLoadedCount,
    totalItemsOverallCount,
    fetchNextPage,
    pagesLoaded,
  } = props;

  return (
    <div className='flex items-center gap-2'>
      <TableButton
        label='<<'
        onClick={() => !isPrevDisabled && onFirstPageClick()}
        isDisabled={isPrevDisabled && totalNumOfPages > 0}
      />

      <TableButton
        label='<'
        onClick={() => !isPrevDisabled && onPrevClick()}
        isDisabled={isPrevDisabled && totalNumOfPages > 0}
      />

      <TableButton
        label='>'
        onClick={() => {
          const canLoadNextPage = !pagesLoaded.includes(currentPage + 1);
          const isNextReallyDisabled = isNextDisabled && !canLoadNextPage;
          if (!isNextReallyDisabled) {
            onNextClick();
            canLoadNextPage && fetchNextPage();
          }
        }}
        isDisabled={isNextDisabled && totalItemsLoadedCount >= totalItemsOverallCount && totalNumOfPages > 0}
      />

      <TableButton
        label='>>'
        onClick={() => {
          const canLoadLastPage = !pagesLoaded.includes(1);
          const isNextReallyDisabled = isNextDisabled && !canLoadLastPage;
          // Go to last possible loaded page, and not to ACTUAL last page!
          if (!isNextReallyDisabled) onLastPageClick();
        }}
        isDisabled={isNextDisabled && totalItemsLoadedCount >= totalItemsOverallCount && totalNumOfPages > 0}
      />

      <span className='flex items-center gap-1'>
        <div>Page</div>
        <strong className='whitespace-nowrap'>
          {currentPage} of {totalNumOfPages}
        </strong>
      </span>
    </div>
  );
}
