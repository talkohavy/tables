import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainWindow from './MainWindow';

const ReactTable = lazy(() => import('../pages/ReactTable'));
const HandsOnTable = lazy(() => import('../pages/Handsontable'));
// const LoginPage = lazy(() => import('../pages/LoginPage'));
// const SingleBookPage = lazy(() => import('../pages/SingleBookPage'));
// const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));
// const PageNotFound = lazy(() => import('../pages/PageNotFound'));

function App() {
  return (
    <>
      <Header />

      <MainWindow>
        <Suspense>
          <Routes>
            <Route path='/index.html' element={<div>Home page</div>} />
            <Route path='/' element={<div>Home page</div>} />
            <Route path='/react-table' element={<ReactTable />} />
            <Route path='/handsontable' element={<HandsOnTable />} />

            <Route path='*' element={<div>Page Note Found</div>} />
          </Routes>
        </Suspense>
      </MainWindow>

      <Footer />
    </>
  );
}

export default App;
