import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux'
import formReducer from '../reducers/formReducer'; 

const logger = createLogger();
const reducer = combineReducers(
  {
      form: formReducer,
      routing: routerReducer
  }
);

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined);
}