/**
 * @file Map Reducer
 * All of the Map Redux reducers.
 * @author Kyle Asaff
 */
import {
SELECT_MAP_ROAD, UNSELECT_MAP_ROAD,
} from '../actions/types';

import update from 'immutability-helper';

// Initial and default map state
export const initialState = {
  selectedRoadId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MAP_ROAD:
      return update(state, {
        selectedRoadId: { $set: action.payload },
      });
    case UNSELECT_MAP_ROAD:
      return update(state, {
        selectedRoadId: { $set: null },
      });
    default:
      return state;
  }
};
