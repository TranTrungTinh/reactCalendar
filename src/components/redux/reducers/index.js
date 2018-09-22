import { combineReducers } from 'redux';
import currentDayReducer from './currentReducer';

const allReducer = combineReducers({
  current: currentDayReducer
});

export default allReducer;