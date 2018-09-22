import * as moment from 'moment';

function getDayInMonth(month, year) {
  const days = [];
  const SUNDAY = 0;
  const MONDAY = 1;

  // Generate all day in this month
  let currentDay = moment(`${year}-${month}-1`, 'YYYY-M-D');
  do {
    days.push(currentDay);
    currentDay = moment(currentDay).add(1, 'd');
  } while ((currentDay.month() + 1) === month);

  // Add previous day to starts
  currentDay = moment(days[0]);

  if(currentDay.day() !== MONDAY) {
    do {
      currentDay = moment(currentDay).subtract(1, 'd');
      days.unshift(currentDay);
    } while (currentDay.day() !== MONDAY);
  }

  // Add following days to end
  currentDay = moment(days[days.length - 1]);

  if(currentDay.day() !== SUNDAY) {
    do {
      currentDay = moment(currentDay).add(1, 'd');
      days.push(currentDay);
    } while (currentDay.day() !== SUNDAY);
  }
  return days;
}
 
export function groupWeek(month, year) {
  const weeks = [];
  let week = [];

  for(let day of getDayInMonth(month, year)) {
    week.push(day);
    if(week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  return weeks;
}