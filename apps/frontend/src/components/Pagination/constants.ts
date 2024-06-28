type PageTile = {
  isThreeDots?: boolean;
  isCurrentPage?: boolean;
  isLastPage?: boolean;
  pageNumber?: number;
};

type ShowAllPagesProps = {
  curPage: number;
  pageNumbersArr: Array<any>;
};

/**
 * Display format: 1 2 3 4 5 6 7 8.
 */
function showAllPages(props: ShowAllPagesProps): Array<PageTile> {
  const { curPage, pageNumbersArr } = props;

  return pageNumbersArr.map((pageNumber) => ({ isCurrentPage: curPage == pageNumber, pageNumber }));
}

type displayFirstFiveAndLastProps = { curPage: number; numOfPages: number };

/**
 * Display format: 1 2 3 4 5 ... 26.
 */
function displayFirstFiveAndLast(props: displayFirstFiveAndLastProps): Array<PageTile> {
  const { curPage, numOfPages } = props;

  const pagesArr: Array<PageTile> = [];
  // -- display first 5 pages
  for (let pageNumber = 1; pageNumber <= 5; pageNumber++) {
    pagesArr.push({ isCurrentPage: curPage == pageNumber, pageNumber });
  }

  // -- display 3 dots and then the last page
  pagesArr.push({ isThreeDots: true, pageNumber: -2 }, { isLastPage: true, pageNumber: numOfPages });

  return pagesArr;
}

type displayFirstAndFiveLastProps = { curPage: number; numOfPages: number };

/**
 * Display format: 1 ... 22 23 24 25 26.
 */
function displayFirstAndFiveLast(props: displayFirstAndFiveLastProps): Array<PageTile> {
  const { curPage, numOfPages } = props;

  const pagesArr: Array<PageTile> = [];
  // -- display first page and then the 3 dots
  pagesArr.push({ pageNumber: 1 }, { isThreeDots: true, pageNumber: -1 });

  // -- display last 5 pages
  for (let i = numOfPages - 5; i <= numOfPages; i++) {
    pagesArr.push({ isCurrentPage: curPage == i, pageNumber: i });
  }

  return pagesArr;
}

type displayFirstLastAndFiveInMiddleProps = {
  curPage: number;
  numOfPages: number;
};

/**
 * Display format: 1 ... 3 4 |5| 6 7 ... 9.
 */
function displayFirstLastAndFiveInMiddle(props: displayFirstLastAndFiveInMiddleProps) {
  const { curPage, numOfPages } = props;

  const pagesArr = [];
  // -- display first page and then the 3 dots
  pagesArr.push({ pageNumber: 1 }, { isThreeDots: true, pageNumber: -1 });

  // -- display middle 5 pages
  for (let i = curPage - 2; i <= curPage + 2; i++) {
    pagesArr.push({ isCurrentPage: curPage == i, pageNumber: i });
  }

  // Step 4: display 3 dots & the last page
  pagesArr.push({ isThreeDots: true, pageNumber: -2 }, { pageNumber: numOfPages });

  return pagesArr;
}

const STRATEGY = {
  SHOW_ALL_PAGES: showAllPages,
  DISPLAY_FIRST_FIVE_AND_LAST: displayFirstFiveAndLast,
  DISPLAY_FIRST_AND_FIVE_LAST: displayFirstAndFiveLast,
  DISPLAY_FIRST_LAST_AND_FIVE_IN_MIDDLE: displayFirstLastAndFiveInMiddle,
};

// const STRATEGY_OPTIONS = Object.keys(STRATEGY).reduce((acc, curKey) => ({ ...acc, [curKey]: curKey }), {});
const STRATEGY_OPTIONS = {
  SHOW_ALL_PAGES: 'SHOW_ALL_PAGES',
  DISPLAY_FIRST_FIVE_AND_LAST: 'DISPLAY_FIRST_FIVE_AND_LAST',
  DISPLAY_FIRST_AND_FIVE_LAST: 'DISPLAY_FIRST_AND_FIVE_LAST',
  DISPLAY_FIRST_LAST_AND_FIVE_IN_MIDDLE: 'DISPLAY_FIRST_LAST_AND_FIVE_IN_MIDDLE',
};

type getDisplayTypeProps = { numOfPages: number; curPage: number };

function getDisplayType(props: getDisplayTypeProps) {
  const { curPage, numOfPages } = props;

  let displayType = '';
  if (numOfPages <= 8) displayType = STRATEGY_OPTIONS.SHOW_ALL_PAGES;
  else if (curPage <= 4) displayType = STRATEGY_OPTIONS.DISPLAY_FIRST_FIVE_AND_LAST;
  else if (curPage >= numOfPages - 3) displayType = STRATEGY_OPTIONS.DISPLAY_FIRST_AND_FIVE_LAST;
  else displayType = STRATEGY_OPTIONS.DISPLAY_FIRST_LAST_AND_FIVE_IN_MIDDLE;

  return displayType;
}

export { STRATEGY, STRATEGY_OPTIONS, getDisplayType };
