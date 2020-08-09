import { machineService } from '../services/machine';

export const getNotifications = () => {
  return machineService
    .getMachines()
    .filter(
      el => el.state === 'error'
    )
    .map(
      el => el.name + ' ist nicht in Betrieb!'
    );
};
