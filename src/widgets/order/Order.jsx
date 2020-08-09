import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Indicators } from './Indicators';
import './order.scss';

export const Order = ({
  dayWidthPx,
  preparationHours,
  neededHours,
  producedHours,
  totalHours,
  offsetHours,
  number,
  caption,
  amount,
  isMaterial
}) => {

  const onDragStart = (event) => {
    event.dataTransfer.setData(
      'orderNumber',
      number
    );
  }

  const pxPerHour = dayWidthPx / 24;

  const materialIcon = isMaterial
    ? <CheckIcon fontSize='small' className='icon ok'></CheckIcon>
    : <ErrorOutlineIcon fontSize='small' className='icon error'></ErrorOutlineIcon>

  return (
    <div
      style={
        {
          width: totalHours * pxPerHour,
          marginLeft: offsetHours * pxPerHour,
        }
      }
      draggable='true'
      onDragStart={ onDragStart }
      className='order'
    >
      <h4>Auftr. Nr. { number }</h4>

      <h5>{ caption }</h5>

      <Indicators
        preparationHours={ preparationHours }
        neededHours={ neededHours }
        producedHours={ producedHours }
      >
      </Indicators>

      <div className='material'>
        Material { materialIcon }
      </div>

      <div className='amount'>
        Auftragsmenge { amount }
      </div>
    </div>
  )
};
