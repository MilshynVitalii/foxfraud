import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import stores from '@/store';
import storesContext from '@/contexts/stores';

import App from '@/App';

stores.products.load();

document.addEventListener('DOMContentLoaded', function() {
  ReactDom.render(
      <storesContext.Provider value={stores}>
        <Router>
          <App/>
        </Router>
      </storesContext.Provider>,
      document.querySelector('#app')
  );
});

import '@/scss/index.scss';
