import orderByProps from './handler';

const objectToBeSorted = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
console.log(orderByProps(objectToBeSorted, ['name', 'level']));
console.log(orderByProps(objectToBeSorted, []));
