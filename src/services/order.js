export const orderService = {
  orders: [
    {
      number: '2202/3284',
      caption: 'Propeller',
      amount: 400,
      produced: 200,
      isMaterial: true,
      machineId: 0,
      dayPosition: 0
    },
    {
      number: '2202/3621',
      caption: 'Propeller',
      amount: 500,
      produced: 100,
      isMaterial: false,
      machineId: 0,
      dayPosition: 1
    },
    {
      number: '2202/3131',
      caption: 'Propeller',
      amount: 340,
      produced: 100,
      isMaterial: true,
      machineId: 0,
      dayPosition: 2
    },

    {
      number: '2202/3749',
      caption: 'Pumpe',
      amount: 1349,
      produced: 600,
      isMaterial: true,
      machineId: 1,
      dayPosition: 0
    },
    {
      number: '2202/2123',
      caption: 'Pumpe',
      amount: 1100,
      produced: 0,
      isMaterial: true,
      machineId: 1,
      dayPosition: 1
    },
    {
      number: '2202/9911',
      caption: 'Pumpe',
      amount: 1240,
      produced: 200,
      isMaterial: false,
      machineId: 1,
      dayPosition: 2
    },

    {
      number: '2202/3712',
      caption: 'Propeller',
      amount: 140,
      produced: 60,
      isMaterial: true,
      machineId: 2,
      dayPosition: 0
    },
    {
      number: '2202/2121',
      caption: 'Propeller',
      amount: 120,
      produced: 80,
      isMaterial: false,
      machineId: 2,
      dayPosition: 1
    },
    {
      number: '2202/3612',
      caption: 'Propeller',
      amount: 100,
      produced: 50,
      isMaterial: true,
      machineId: 2,
      dayPosition: 2
    },

    {
      number: '2202/3864',
      caption: 'Pumpe',
      amount: 1440,
      produced: 600,
      isMaterial: true,
      machineId: 3,
      dayPosition: 0
    }
  ],

  getOrders() {
    return this.orders;
  },

  getOrder(machineId, dayPosition) {
    return this.orders.find(el => (
      el.machineId === machineId
        && el.dayPosition === dayPosition
    ));
  },

  getOrderByNumber(number) {
    return this.orders.find(el => el.number === number);
  },

  setDayPosition(number, dayPosition) {
    const index = this.orders.findIndex(el => el.number === number);
    this.orders[ index ].dayPosition = dayPosition;
  },

  flipOrders(number, newDayPosition) {
    const order = this.getOrderByNumber(number);
    const partner = this.getOrder(order.machineId, newDayPosition);
    if (partner) {
      this.setDayPosition(partner.number, order.dayPosition);
    }
    this.setDayPosition(number, newDayPosition);
  }
};
