import React from 'react';

export default function MainWindow({ children }) {
  return (
    <div className='relative flex h-[calc(100%-12rem)] items-start justify-center overflow-x-hidden dark:bg-[#383838]'>
      {children}
    </div>
  );
}
