import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

import { createLogger } from 'redux-logger'

const logger = createLogger();

import { createNetworkMiddleware } from 'react-native-offline';
const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

export const middlewares = (() => {
  const middlewareArray = [networkMiddleware, logger, reduxThunk];
  return middlewareArray;
})();

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
