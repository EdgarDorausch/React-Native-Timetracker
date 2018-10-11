import { ActionCreator, Dispatch } from 'redux';
import {
  ToggleTimerAction,
  IncreaseTimerAction
} from './types';

export const increaseTimer: ActionCreator<IncreaseTimerAction> = (dispatch: Dispatch) => {
  return {
    type: '@@Timer/INCREASE_TIMER',
    payload: {}
  }
};

let timer: number|null = null;
export const toggleTimer: ActionCreator<ToggleTimerAction> = (dispatch: Dispatch) => {
  if (timer !== null) {
    clearTimeout(timer);
    timer = null;
  } else {
    timer = setInterval(() => dispatch(increaseTimer()), 1000)
  }
  return {
    type: '@@Timer/TOGGLE_TIMER',
    payload: {}
  }
};
