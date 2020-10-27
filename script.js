// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// Problem:
// "Given an array of temperatures of one day, calculate the temperatures amplitude. Keep in mind that sometimes there might be a senor error"

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems (tasks)
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude = A) and return it


const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amp = calcTempAmplitude(temperatures);
console.log(amp);

// ES6 Version
const calcTempAmplitude6 = function (temps) {
  let max = temps[0];
  let min = temps[0];

  temps.forEach(temp => {
    if (typeof temp !== 'error');
    if (temp > max) max = temp;
    if (temp < min) min = temp;
  });
  console.log(max, min);
  return max - min;
};

const amp6 = calcTempAmplitude6(temperatures);
console.log(amp6);

// PROBLEM 2;
// Funciton should now recieve 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement same functionality twice? NO! Just merge two arrays
// - How to merge arrays? Destructuring for ES6 or concat for ES5 

const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
      if (typeof curTemp !== 'number') continue;
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
  };
  
  const ampNew = calcTempAmplitudeNew([3,5,1], [9,0,5]);
  console.log(ampNew);

// ES6 Version
const calcTempAmplitudeNew6 = function (t1, t2) {
    const temps = [...t1, ...t2];
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
  
    temps.forEach(temp => {
      if (typeof temp !== 'error');
      if (temp > max) max = temp;
      if (temp < min) min = temp;
    });
    console.log(max, min);
    return max - min;
  };
  
  const ampNew6 = calcTempAmplitudeNew6([3,5,1], [9,0,5]);
  console.log(ampNew6);
*/

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const ampBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(ampBug); */

/////////////////////////////
//// CODING CHALLENGE #1 ////
/////////////////////////////

