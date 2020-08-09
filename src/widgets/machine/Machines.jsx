import React from 'react';
import { Machine } from './Machine';

export const Machines = ({
  machines,
  shiftsChange,
  days,
  dayChange
}) => {

  return (
    <div className='machines'>
      {
        machines.map(
          (machine, index) => (
            <Machine
              index={ index }
              machine={ machine }
              days={ days }
              shiftsChange={ shiftsChange }
              dayChange={ dayChange }
              key={ index }
            >
            </Machine>
          )
        )
      }
    </div>
  );
};
