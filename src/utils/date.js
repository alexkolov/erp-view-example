import moment from 'moment';

export const getDays = (startingDate, totalDays) => {
  const days = [];

  for (let i = 0; i < totalDays; i++) {
    days.push(moment(startingDate).add(i, 'days'));
  }

  return days;
};
