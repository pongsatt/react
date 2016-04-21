import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {TodoAppContainer} from './components/TodoApp';
import {compose, createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {MyAppContainer} from './MyApp';
import {HomeContainer} from './components/Home';
import {TestContainer} from './components/Test';
import { Router, Route, browserHistory, IndexRedirect} from 'react-router'
import { syncHistoryWithStore, routerReducer, reduxRouteComponent} from 'react-router-redux'
import {RegistrationContainer} from './containers/Registration';
import {ClientProfileContainer} from './containers/ClientProfile';
import {ReviewContainer} from './containers/Review';
import formReducer from './reducers/formReducer';

//for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreDevTools(
    combineReducers({
        routing: routerReducer,
        data: formReducer
    }),
    {}
);
  
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={MyAppContainer}>
                <IndexRedirect to="registration" />
                <Route path="registration" component={RegistrationContainer}/>
                <Route path="clientProfile" component={ClientProfileContainer}/>
                <Route path="review" component={ReviewContainer}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);