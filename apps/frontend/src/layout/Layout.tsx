import { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';
import MainWindow from './MainWindow';

type LayoutProps = PropsWithChildren;

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />

      <MainWindow>{children}</MainWindow>

      <Footer />
    </>
  );
}
