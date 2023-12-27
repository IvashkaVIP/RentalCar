import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/RentalCar">
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
