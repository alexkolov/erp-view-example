import React from 'react';
import { Shift } from './Shift';

export const Shifts = ({ shifts }) => {
  return (
    <div className='shifts'>
      {
        new Array(3)
          .fill(null)
          .map(
            (_, index) => (
              <Shift
                shifts={ shifts }
                index={ index }
                key={ index }
              >
              </Shift>
            )
          )
      }
    </div>
  )
};