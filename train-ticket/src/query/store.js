import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import { h0 } from '../common/fp.js';
import { ORDER_DEPART } from './constant.js';

import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers(reducers),
  {
    from: null,
    to: null,
    departDate: h0(new Date()),
    highSpeed: false,
    trainList: [],
    orderType: ORDER_DEPART,
    onlyTickets: false,
    ticketTypes: [],
    checkedTicketTypes: {},
    trainTypes: [],
    checkedTrainTypes: {},
    departStations: [],
    checkedDepartStations: {},
    arriveStations: [],
    checkedArriveStations: {},
    departTimeStart: 0,
    departTimeEnd: 24,
    arriveTimeStart: 0,
    arriveTimeEnd: 24,
    isFiltersVisible: false,
    searchParsed: false,
  },
  applyMiddleware(thunk)
);