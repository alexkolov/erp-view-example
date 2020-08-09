export const machineService = {
  machines: [
    {
      id: 0,
      name: 'Drehmaschine 312',
      shifts: 1,
      state: 'producing',
      preparationHours: 2,
      throughputPerHour: 50,
      nextMaintenance: new Date('2020-10-11')
    },
    {
      id: 1,
      name: 'Drehmaschine 212',
      shifts: 1,
      state: 'producing',
      preparationHours: 3,
      throughputPerHour: 120,
      nextMaintenance: new Date('2020-8-02')
    },
    {
      id: 2,
      name: 'Drehmaschine 122',
      shifts: 2,
      state: 'preparing',
      preparationHours: 1,
      throughputPerHour: 15,
      nextMaintenance: new Date('2021-10-01')
    },
    {
      id: 3,
      name: 'Drehmaschine 782',
      shifts: 3,
      state: 'error',
      preparationHours: 4,
      throughputPerHour: 120,
      nextMaintenance: new Date('2022-11-01')
    }
  ],

  getMachines() {
    return this.machines;
  },

  getState(machineId) {
    return this.machines.find(
      el => el.id === machineId
    ).state;
  },

  setShifts(machineId, amount) {
    const index = this.machines.findIndex(el => el.id === machineId);
    this.machines[ index ].shifts = amount;
  },

  getShifts(machineId) {
    const index = this.machines.findIndex(el => el.id === machineId);
    return this.machines[ index ].shifts;
  }
};
