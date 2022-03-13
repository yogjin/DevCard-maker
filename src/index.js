import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './services/auth';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
