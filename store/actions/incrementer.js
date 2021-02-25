import {
  INCREMENT,
  DECREMENT,
} from './types';

export const incrementAction = (num) => {
  function thunk(dispatch) {
    dispatch({ type: INCREMENT, payload: num });
  };

  thunk.interceptInOffline = true; // This is the important part
  thunk.meta = {
    retry: true,
  }
  return thunk; // Return it afterwards
};

export const decrementAction = (num) => {
  function thunk(dispatch) {
    dispatch({ type: DECREMENT, payload: num });
  };

  thunk.interceptInOffline = true; // This is the important part
  thunk.meta = {
    retry: true,
  }
  return thunk; // Return it afterwards
};