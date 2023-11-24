import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainWindow from './MainWindow';

const ReactTable = lazy(() => import('../pages/ReactTable'));
const HandsOnTable = lazy(() => import('../pages/Handsontable'));
const AgGrid = lazy(() => import('../pages/AgGrid'));
const PrimeReactDataTable = lazy(() => import('../pages/PrimeReactDataTable'));

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
            <Route path='/hands-on-table' element={<HandsOnTable />} />
            <Route path='/ag-grid' element={<AgGrid />} />
            <Route path='/prime-react-data-table' element={<PrimeReactDataTable />} />

            <Route path='*' element={<div>Page Note Found</div>} />
          </Routes>
        </Suspense>
      </MainWindow>

      <Footer />
    </>
  );
}

export default App;
