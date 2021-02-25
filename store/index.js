import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

import { createNetworkMiddleware } from 'react-native-offline';
const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const getStore = () => {
  const appliedMiddleware = applyMiddleware(networkMiddleware, reduxThunk);
  return createStore(
    reducers,
    appliedMiddleware,
  );
};

const store = getStore();

export { store };
