import React, { useRef, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { useDimensions } from '../../utils/core';
import { Shifts } from './Shifts';
import { Order } from '../order/Order';
import './day.scss';

export const Day = ({
  position,
  machine,
  order,
  dragStart,
  dayChange
}) => {

  const componentRef = useRef();
  const { width } = useDimensions(componentRef);

  const [ dayClassName, setDayClassName ] = useState(
    `day day-${ position }`
  );

  const onDragOver = (event) => {
    event.preventDefault();
    setDayClassName(`day day-${ position } ondragover`);
  }

  const onDragLeave = (event) => {
    event.preventDefault();
    setDayClassName(`day day-${ position }`);
  }

  const onDrop = (event) => {
    event.preventDefault();
    const orderNumber = event.dataTransfer.getData('orderNumber');
    dayChange(machine.id, orderNumber, position)
    setDayClassName(`day day-${ position }`);
  }

  let orderTemplate;

  if (order) {
    orderTemplate = (
      <Order
        { ...order }
        dayWidthPx={ width }
        dragStart={ dragStart }
      >
      </Order>
    )
  }

  return (
    <Paper
      ref={ componentRef }
      elevation={ 10 }
      className={ dayClassName }
      onDragOver={ onDragOver }
      onDragLeave={ onDragLeave }
      onDrop={ onDrop }
    >
      <Shifts shifts={ machine.shifts }>
      </Shifts>

      { orderTemplate }
    </Paper>
  );
}

