import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/index.sass";
import App from './App';
import ThemeProvider from './provider/ThemeProvider';
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
