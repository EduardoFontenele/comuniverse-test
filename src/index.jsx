import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyle from './GlobalStyle';
import GlobalContext from './contexts/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <GlobalStyle />
      <App />
    </GlobalContext>
  </React.StrictMode>,
);
