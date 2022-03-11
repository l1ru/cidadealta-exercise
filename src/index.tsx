import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import Home from './pages/Home';

import Store from './services/Store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
