'use strict';

/*
const tempInC = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];

const CtoKel = tempInC => {
  const tempInKel = [];
  for (let i = 0; i < tempInC.length; i++) {
    tempInKel.push(tempInC[i] + 273);
  }
  return tempInKel;
};

console.log(CtoKel(tempInC));

*/

const DegToKel = function () {
  const measureKel = {
    type: 'temperature',
    unit: 'celcius',
    value: Number(prompt('Enter temperature (°c )')), // Way-1 (string to number)
    // value: parseInt(prompt('Enter temperature (°c )'), 10), // way-2
  };
  console.log(measureKel.value); // to show value on console

  //   console.table(measureKel);
  //   console.warn(measureKel.value); // to show warning on console
  //   console.error(measureKel.value); // to show error on console

  const kelvin = measureKel.value + 273;
  return kelvin;
};

console.log(DegToKel());
