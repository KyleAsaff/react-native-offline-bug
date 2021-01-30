/**
 * @file store.js
 * Middleware and functions related for redux store
 * @author Kyle Asaff
 */

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

/**
* Returns redux middleware with respect to the current development environment
*/
export const middlewares = (() => {
  const middlewareArray = [reduxThunk];
  return middlewareArray;
})();

/**
* creates and returns redux store
*/
const getStore = () => {
  const appliedMiddleware = __DEV__
    ? composeWithDevTools(
      applyMiddleware(...middlewares),
    )
    : applyMiddleware(...middlewares);
  return createStore(
    reducers,
    appliedMiddleware,
  );
};

const store = getStore();

export { store };
