import { Reducer } from 'redux';
import { TimerState, TimerActions } from './types';

export const initialState: TimerState = {
  isActive: false,
  value: 0
};

const reducer: Reducer<TimerState, TimerActions> = (state: TimerState = initialState, action: TimerActions) => {
  switch (action.type) {
    case '@@Timer/INCREASE_TIMER':
      return {
        ...state,
        value: state.value + 1
      }
    case '@@Timer/TOGGLE_TIMER':
      return {
        ...state,
        isActive: !state.isActive
      }
      
    default:
      return state;
  }
};
  
export default reducer;