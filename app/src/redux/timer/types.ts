import { Action } from 'redux';

export interface TimerState {
  isActive: boolean;
  value: number;
}

// Action-Types:
export interface IncreaseTimerAction extends Action {
  type: '@@Timer/INCREASE_TIMER';
  payload: {};
}
export interface ToggleTimerAction extends Action {
  type: '@@Timer/TOGGLE_TIMER';
  payload: {};
}
// export interface StartTimer extends Action {
//     type: '@@Timer/START_TIMER';
//     payload: {};
// }
// export interface PauseTimer extends Action {
//     type: '@@Timer/PAUSE_TIMER';
//     payload: {};
// }
// export interface StopTimer extends Action {
//     type: '@@Timer/STOP_TIMER';
//     payload: {};
// }

export type TimerActions =
  ToggleTimerAction |
  IncreaseTimerAction;