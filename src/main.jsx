import React from 'react';
import { registerAllModules } from 'handsontable/registry';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './layout/App';
import DarkThemeProvider from './providers/DarkThemeProvider';
import 'handsontable/dist/handsontable.full.min.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './index.css';

// import './styles/bootstrap4-dark-blue/theme.css';
// import './styles/tailwind-light/theme.css';

registerAllModules();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkThemeProvider>
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          <App />
        </PrimeReactProvider>
      </DarkThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
