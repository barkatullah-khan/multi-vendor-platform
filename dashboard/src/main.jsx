import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import { Toaster } from 'react-hot-toast';

const App = lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <App />
        <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#283046',
            color: '#d0d2d6',
          },
        }}
      />
        </Suspense>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);