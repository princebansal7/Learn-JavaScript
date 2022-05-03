'use strict';

/*

eg: [17, 21, 23]
O/P: ...17°C in 1 days...21°C in 2 days...23°C in 3 days...

*/

const printForecast = function (temps) {
  let str = '...';
  for (let i = 0; i < temps.length; i++) {
    str += `${temps[i]}°C in ${i + 1} days...`;
  }
  return str;
};

const temps = [17, 21, 23];
// const temps = [12, 5, -5, 0, 4];

const ans = printForecast(temps);
console.log(ans);
