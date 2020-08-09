import React from 'react';
import Paper from '@material-ui/core/Paper';

export const Indicators = ({
  preparationHours,
  neededHours,
  producedHours
}) => {

  const totalHours = preparationHours + neededHours;
  const restHours = neededHours - producedHours;

  const calcWidth = (value, base=totalHours) => (
    `${ value / base * 100 }%`
  )

  return (
    <Paper
      elevation={ 2 }
      className='indicators'
    >
      <div
        style={{ width: calcWidth(preparationHours) }}
        className='preparation'
      >
        { Math.round(preparationHours) }
      </div>

      <div
        style={{ width: calcWidth(neededHours, neededHours) }}
        className='progress'
      >

        <div
          style={{ width: calcWidth(producedHours, neededHours) }}
          className='produced'
        >
          { Math.round(producedHours) }
        </div>

        <div
          style={{ width: calcWidth(restHours, neededHours) }}
          className='rest'
        >
          { Math.round(neededHours) }
        </div>

      </div>
    </Paper>
  );
};
