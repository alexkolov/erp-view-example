import moment from 'moment';
import React from 'react';

export const DayLabels = ({ days }) => {
  return (
    <div className='day-labels'>
      {
        days.map(
          (day, index) => (
            <h3 key={ index }>
              { moment(day).format('dddd') }
            </h3>
          )
        )
      }
    </div>
  );
};