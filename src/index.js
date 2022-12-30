import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./redux/store/store";


ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        </PersistGate>
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
