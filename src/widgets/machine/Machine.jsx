import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Days } from '../day/Days'
import { MachineDesciption } from './MachineDescription';
import './machine.scss';

export const Machine = ({
  index,
  machine,
  shiftsChange,
  days,
  dayChange
}) => {

  return (
    <Paper
      className={ `machine machine-${ index }` }
    >
      <MachineDesciption
        machine={ machine }
        shiftsChange= { shiftsChange }
      >
      </MachineDesciption>

      <Days
        days={ days }
        machine={ machine }
        dayChange={ dayChange }
      >
      </Days>
    </Paper>
  );
};
