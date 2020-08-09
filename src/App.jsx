import React, { useState } from 'react';
import { getNotifications } from './utils/notification';
import { getDays } from './utils/date';
import { machineService } from './services/machine';
import { orderService } from './services/order';
import { Notifications } from './widgets/notification/Notification';
import { Controls } from './widgets/control/Control';
import { DayLabels } from './widgets/day/DayLabels';
import { Machines } from './widgets/machine/Machines';
import './App.scss';

const App = () => {

  const [ notifications ] = useState(
    getNotifications()
  );

  const [ days ] = useState(
    getDays(new Date(), 3)
  );

  const [ machines, setMachines ] = useState(
    machineService.getMachines()
  );

  // eslint-disable-next-line
  const [ _, setOrders ] = useState(
    orderService.getOrders()
  );

  const onShiftChange = (id, shifts) => {
    machineService.setShifts(id, Number(shifts));
    setMachines([ ...machineService.getMachines() ]);
  };

  const onDayChange = (machineId, orderNumber, dayPosition) => {
    const oldState = orderService.getOrderByNumber(orderNumber);
    const shouldUpdate = oldState.machineId === machineId
      && oldState.dayPosition !== dayPosition;

    if (shouldUpdate) {
      orderService.flipOrders(orderNumber, dayPosition);
      setOrders([ ...orderService.getOrders() ]);
    }
  };

  return (
    <div className='app'>

      {
        notifications.length
          ? <Notifications notifications={ notifications } />
          : null
      }

      <Controls />

      <DayLabels days={ days }></DayLabels>

      <Machines
        machines={ machines }
        shiftsChange={ onShiftChange }
        dayChange={ onDayChange }
        days={ days }
      >
      </Machines>
    </div>
  );
};

export default App;
