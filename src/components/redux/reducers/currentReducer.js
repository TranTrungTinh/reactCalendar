import moment from 'moment';
import { groupWeek } from '../../utils/getDayInMonth';
import { NEXT_MONTH, PRE_MONTH } from '../actions/actionTypes';

const month = moment().month() + 1;
const year = moment().year();

const defaultState = {
  month: month,
  year: year,
  weeks: groupWeek(month, year)
}

const currentDayReducer = (state = defaultState, action) => {
  if(action.type === NEXT_MONTH) {
    if(state.month === 12) {
      return {
        month: 1, 
        year: state.year + 1,
        weeks: groupWeek(1, state.year + 1)
      }
    }
    return { 
      ...state, 
      month: state.month + 1, 
      weeks: groupWeek(state.month + 1, state.year) 
    }
  }

  if(action.type === PRE_MONTH) {
    if(state.month === 1) {
      return {
        month: 12, 
        year: state.year - 1,
        weeks: groupWeek(12, state.year - 1)
      }
    }
    return { 
      ...state, 
      month: state.month - 1, 
      weeks: groupWeek(state.month - 1, state.year) 
    }
  }

  return state;
}

export default currentDayReducer;