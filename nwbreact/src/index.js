import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

import App from './App'
import Registration from './containers/registration/Registration'
import ClientProfile from './containers/clientProfile/ClientProfile'
import Review from './containers/review/Review'

render(<Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Registration}/>
          <Route path="clientProfile" component={ClientProfile}/>
          <Route path="review" component={Review}/>
      </Route>
      </Router>
  </Provider>, document.querySelector('#app'))
