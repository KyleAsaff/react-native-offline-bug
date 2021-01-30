/**
 * @file index.js Reducer
 * Hosts logic for combining redux reducers in the app
 * @author Kyle Asaff
 */

import { combineReducers } from 'redux';

import map from './map';

// Combine all reducers within the app and return them together
export default combineReducers({
  map,
});
