const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// const carsByMake = [['f150'], ['corolla'], ['camaro']];
const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();

// carMakers.push(100);

carMakers.map((car: string) => {
  return car.toUpperCase();
});

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
