import { createStorageMiddleware, getStorageState } from 'redux-simple-storage-middleware';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reduxReset from 'redux-reset';
import createHistory from 'history/createBrowserHistory';
import * as Login from './../Page/Login/reducer';
import * as Feed from './../Page/Feed/reducer';
import * as Decline from './../Components/DeclineModal/reducer';

const storageStateConfiguration = {
  key: 'ZENJOB_CHALLENGE',
  type: 'localStorage',
};

const storageMiddlewareConfiguration = {
  ...storageStateConfiguration,
  exclude: ['router', Feed.NAME, Decline.NAME],
};

const myReducers = {
  [Login.NAME]: Login.reducer,
  [Feed.NAME]: Feed.reducer,
  [Decline.NAME]: Decline.reducer,
};

const configureStore = (history) => {
  const state = getStorageState(storageStateConfiguration);
  const historyMiddleware = routerMiddleware(history);
  const localStorageMiddleware = createStorageMiddleware(storageMiddlewareConfiguration);
  const reducers = combineReducers({ ...myReducers, router: routerReducer });
  return createStore(reducers, state, compose(
    applyMiddleware(historyMiddleware, thunk, localStorageMiddleware /* , createLogger() */ ),
    reduxReset(),
  ));
};

const history = createHistory();
const store = configureStore(history);

export { history, store };