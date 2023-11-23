import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import 'handsontable/dist/handsontable.full.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './layout/App';
import DarkThemeProvider from './providers/DarkThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkThemeProvider>
        <App />
      </DarkThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
