import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/globals.css';
import { BrowserRouter } from 'react-router-dom';
import WebRoutes from './routes/index.jsx';
import 'react-phone-input-2/lib/style.css'
import { Toaster } from './components/ui/toaster.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WebRoutes />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
