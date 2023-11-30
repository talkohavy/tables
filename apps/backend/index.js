import express from 'express';
import { getAllCustomers, getCustomersByFilterAndPage } from './dummyData.js';

function startServer() {
  const app = express();

  app.get('/customers', (req, res, next) => {
    const { page, itemsPerPage, filter } = req.query;

    if (!page && !itemsPerPage) return res.json({ data: getAllCustomers() });

    // @ts-ignore
    return res.json({ data: getCustomersByFilterAndPage({ filter, itemsPerPage, page }) });
  });

  app.use((req, res, next) => {
    console.error('path not found!');
    res.json({ ok: false, message: 'path not found' });
  });

  app.get('**', (req, res, next, error) => {
    console.error(error);
    res.json({ ok: false, message: 'error occurred' });
  });

  const PORT = 8000;
  app.listen(PORT, () => console.log(`server started on port ${PORT}`));
}

startServer();
