import {
  SELECT_MAP_ROAD,
} from './types';

export const selectMapRoad = (id) => {
  function thunk(dispatch) {
    dispatch({ type: SELECT_MAP_ROAD, payload: id });
  };

  thunk.interceptInOffline = true; // This is the important part
  thunk.meta = {
    retry: true,
  }
  return thunk; // Return it afterwards
};