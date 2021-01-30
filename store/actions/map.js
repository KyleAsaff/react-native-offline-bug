import {
  SELECT_MAP_ROAD, UNSELECT_MAP_ROAD,
} from './types';

export const selectMapRoad = (id) => (dispatch) => {
  console.log('dispatching');
  dispatch({ type: SELECT_MAP_ROAD, payload: id });
};

export const unselectMapRoad = () => (dispatch) => {
  dispatch({ type: UNSELECT_MAP_ROAD });
};