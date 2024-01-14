import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/globals.css';
import { BrowserRouter } from 'react-router-dom';
import WebRoutes from './routes/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WebRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
