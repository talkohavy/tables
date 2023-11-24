import React, { useMemo } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';
import MyLink from '../components/Link';

const linksRaw = [
  // NOTE: The order of these items matter
  {
    name: 'page1',
    text: 'Page 1',
    checkIsCurrentPage: ({ pathname }) => /^\/react-table/.test(pathname),
    to: '/react-table',
  },
  {
    name: 'page2',
    text: 'Page 2',
    checkIsCurrentPage: ({ pathname }) => /^\/hands-on-table/.test(pathname),
    to: '/hands-on-table',
  },
  {
    name: 'page3',
    text: 'Page 3',
    checkIsCurrentPage: ({ pathname }) => /^\/ag-grid/.test(pathname),
    to: '/ag-grid',
  },
];

export default function Header() {
  const { pathname } = useLocation();

  const headerLinks = useMemo(
    () =>
      linksRaw.map(({ checkIsCurrentPage, to, text }) => ({
        isCurrentPage: checkIsCurrentPage({ pathname }),
        to,
        text,
      })),
    [pathname],
  );

  return (
    <header className='sticky top-0 z-30 flex h-20 items-center justify-start bg-blue-200 shadow-mini'>
      <DarkModeToggle size={20} className='m-0 flex h-full items-center justify-center sm:m-4' />

      {headerLinks.map(({ isCurrentPage, text, to }) => (
        <MyLink
          key={text}
          to={to}
          style={{ WebkitTextStrokeColor: 'black' }}
          className={clsx(
            'mx-2.5 my-0 w-auto cursor-pointer whitespace-nowrap bg-transparent text-2xl font-bold text-white',
            isCurrentPage ? '!cursor-default !text-rose-400' : 'hover:text-[#fff2ba]',
          )}
        >
          {text}
        </MyLink>
      ))}
    </header>
  );
}
