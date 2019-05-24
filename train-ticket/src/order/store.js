import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import reducers from './reducers';
import thunk from 'react-thunk';

export default createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(thunk)
);