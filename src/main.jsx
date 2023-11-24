import React from 'react';
import { registerAllModules } from 'handsontable/registry';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './layout/App';
import DarkThemeProvider from './providers/DarkThemeProvider';
import 'handsontable/dist/handsontable.full.min.css';
import './index.css';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

registerAllModules();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkThemeProvider>
        <App />
      </DarkThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
