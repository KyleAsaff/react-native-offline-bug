import {
  INCREMENT,
  DECREMENT,
} from '../actions/types';

import { offlineActionTypes } from 'react-native-offline';

import update from 'immutability-helper';

export const initialState = {
  incNumber: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return update(state, {
        incNumber: { $set: action.payload },
      });
    case DECREMENT:
      return update(state, {
        incNumber: { $set: action.payload },
      });
    case offlineActionTypes.FETCH_OFFLINE_MODE:
      return update(state, {});
    default:
      return state;
  }
};
