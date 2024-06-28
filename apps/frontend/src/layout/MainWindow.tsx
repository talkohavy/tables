import { PropsWithChildren } from 'react';

export default function MainWindow(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className='relative flex h-[calc(100%-12rem)] items-start justify-center overflow-x-hidden dark:bg-[#383838]'>
      {children}
    </div>
  );
}
