import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalContextWrapper from './context/GlobalContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <GlobalContextWrapper>
    <App />
   </GlobalContextWrapper>
  </React.StrictMode>
);

