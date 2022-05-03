'use strict';

//-----------Challenge-1--------------------------------------------------------------------------------------
// calculating temperature amplitude (difference b/w highest and lowest) from given temperature array of a day

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const getAmplitude = function (temperature) {
  let max = temperature[0];
  let min = temperature[0];
  for (let i = 1; i < temperature.length; i++) {
    //ignoring errors
    if (temperature[i] === 'error') {
      continue;
    }
    // getting max temperature
    if (max < temperature[i]) {
      max = temperature[i];
    }
    // getting min temperature
    if (min > temperature[i]) {
      min = temperature[i];
    }
  }
  // returning amplitude
  return max - min;
};

console.log(`Amplitude temperature of day is ${getAmplitude(temperature)}`);

//-------Challenge-2----------------------------------------------------

// Above function now receive 2 temperature Array and should work the same

const temp1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temp2 = [-3, -2, -6, -1, 'error', 9, 53, 17, 'error'];

const getAmplitude2 = function (temp1, temp2) {
  // Merging both temperature arrays
  const temps = temp1.concat(temp2);

  //   console.log('After Merging: ' + temps);

  // Applying the same logic to get Amplitude
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    //ignoring errors
    if (temps[i] === 'error') {
      continue;
    }
    // getting max temps
    if (max < temps[i]) {
      max = temps[i];
    }
    // getting min temps
    if (min > temps[i]) {
      min = temps[i];
    }
  }
  // returning amplitude
  return max - min;
};

console.log(`Amplitude temperature of day is ${getAmplitude2(temp1, temp2)}`);
