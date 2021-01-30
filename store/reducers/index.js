import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';

import map from './map';

export default combineReducers({
  map,
  network,
});
