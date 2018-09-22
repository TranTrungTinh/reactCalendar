import { NEXT_MONTH, PRE_MONTH } from './actionTypes';

export const nextMonthAction = () => {
  return { type: NEXT_MONTH }
}

export const preMonthAction = () => {
  return { type: PRE_MONTH }
}