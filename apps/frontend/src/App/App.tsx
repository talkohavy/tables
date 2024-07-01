import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const ReactTable = lazy(() => import('../pages/ReactTable'));
const HandsOnTable = lazy(() => import('../pages/Handsontable'));
const AgGrid = lazy(() => import('../pages/AgGrid'));
const PrimeReactDataTable = lazy(() => import('../pages/PrimeReactDataTable'));

export default function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path='/index.html' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/react-table' element={<ReactTable />} />
          <Route path='/hands-on-table' element={<HandsOnTable />} />
          <Route path='/ag-grid' element={<AgGrid />} />
          <Route path='/prime-react-data-table' element={<PrimeReactDataTable />} />

          <Route path='*' element={<div>Page Note Found</div>} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
