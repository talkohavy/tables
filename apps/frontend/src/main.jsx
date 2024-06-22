import React from 'react';
import { registerAllModules } from 'handsontable/registry';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './layout/App';
import DarkThemeProvider from './providers/DarkThemeProvider';
import 'handsontable/dist/handsontable.full.min.css';
import './bootstrap';
import './index.css';

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
