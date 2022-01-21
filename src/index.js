import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
