import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import App from './App.jsx'
import { StrictMode } from 'react';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
      <App />
  </StrictMode>
  </BrowserRouter>
)
