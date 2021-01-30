import {
  SELECT_MAP_ROAD,
} from '../actions/types';

import { offlineActionTypes } from 'react-native-offline';

import update from 'immutability-helper';

// Initial and default map state
export const initialState = {
  selectedRoadId: null,
  queue: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MAP_ROAD:
      return update(state, {
        selectedRoadId: { $set: action.payload },
      });
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      console.log('Start of Offline Action');
      console.log(action);
      console.log('End of Offline Action');
      return update(state, {});
    default:
      return state;
  }
};
