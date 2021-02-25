import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';

import map from './incrementer';

export default combineReducers({
  map,
  network,
});
