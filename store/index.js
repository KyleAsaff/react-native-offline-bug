import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

import { createNetworkMiddleware } from 'react-native-offline';
const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

/**
* Returns redux middleware with respect to the current development environment
*/
export const middlewares = (() => {
  const middlewareArray = [networkMiddleware, reduxThunk];
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
