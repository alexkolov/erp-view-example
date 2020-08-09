import moment from 'moment';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Circle } from './Circle';

export const MachineDesciption = (
  { machine, shiftsChange }
) => {

  const {
    id,
    name,
    state,
    shifts,
    nextMaintenance
  } = machine;

  const handleChange = (event) => {
    shiftsChange(id, event.target.value);
  };

  return (
    <div className='description'>
      <h4 className='title'>
        { name }
        <Circle state={ state }></Circle>
      </h4>

      <FormControl className='shift-select'>
        <Select
          native
          value={ shifts }
          onChange={ handleChange }
        >
          <option value={ 1 }>1 Schicht</option>
          <option value={ 2 }>2 Schichten</option>
          <option value={ 3 }>3 Schichten</option>
        </Select>
      </FormControl>

      <div className='next-maintenance'>
        Nächste Wartung:
        <span className='date'>
          {
            moment(nextMaintenance).format('DD.MM.YYYY')
          }
        </span>
      </div>
      <a href='/details'>Details</a>
    </div>
  );
};
