import React from 'react';
import { Day } from './Day';
import { orderService } from '../../services/order';

export const Days = ({
  machine,
  days,
  dayChange
}) => {

  let lastExtensionHours;

  const prepareOrder = (machine, dayPosition) => {
    let order = orderService.getOrder(
      machine.id,
      dayPosition
    );

    if (order) {
      const neededHours = order.amount / machine.throughputPerHour;
      const availableHours = machine.shifts * 8;
      const waitingHours = neededHours <= availableHours
        ? 0
        : 24 - availableHours;
      const offsetHours = lastExtensionHours || 0;
      const producedHours = order.produced / machine.throughputPerHour;

      order = {
        ...order,
        preparationHours: machine.preparationHours,
        neededHours,
        producedHours,
        totalHours: neededHours + waitingHours,
        offsetHours
      };

      lastExtensionHours = Math.max(
        neededHours + offsetHours - availableHours,
        0
      );
    }

    return order;
  };

  return (
    <div className='days'>
      {
        days.map(
          (_, index) => (
            <Day
              position={ index }
              machine={ machine }
              order={ prepareOrder(machine, index) }
              key={ index }
              dayChange={ dayChange }
            >
            </Day>
          )
        )
      }
    </div>
  );
}