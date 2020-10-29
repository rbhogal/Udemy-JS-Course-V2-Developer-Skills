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
  console.log(ampNew); */

/*
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

const ampNew6 = calcTempAmplitudeNew6([3, 5, 1], [9, 0, 5]);
console.log(ampNew6);
*/
/* 
// ES6 Revised Version using reduce((accumulator, currentValue), accumulator = initValue) & acc min and max in an array
function calcTempAmplitudeNew6v2(t1, t2) {
  const temps = [...t1, ...t2];
  const amp = temps.reduce((acc, curTemp) => {
    if (typeof curTemp !== 'error');
    acc[0] = acc[0] === undefined || curTemp > acc[0] ? curTemp : acc[0];
    acc[1] = acc[1] === undefined || curTemp < acc[1] ? curTemp : acc[1];
    return acc;
  }, []);
  const [max, min] = amp;
  console.log(max, min);
  return max - min;
}

const ampNew6v2 = calcTempAmplitudeNew6v2([3, 5, 1], [9, 0, 5]);
console.log(ampNew6v2);
 */
/*
// ES6 v3 using Math.max and Math.min
const calcTempAmplitudeNew6v3 = function (t1, t2) {
  const temps = [...t1, ...t2];
  const max = Math.max(...temps);
  const min = Math.min(...temps);
  return max - min; 
};

const ampNew6v3 = calcTempAmplitudeNew6v3([3, 5, 1], [9, 0, 5]);
console.log(ampNew6v3);
*/

/*
const measureKelvin = function () {
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
console.log(ampBug); 
*/

/////////////////////////////
//// CODING CHALLENGE #1 ////
/////////////////////////////

// How do you console log a string with all the values of an array all at one time (console logged all at once/one time)?
// Spread operator? Destructuring? Iterate all the elements of an array?

/*
// Basic ES6 w/spread operator
const printForecast = temps => {
  const tempStrings = [`...`];

  for (let i = 0; i < temps.length; i++) {
    tempStrings.push(
      `${temps[i]}*C in ${temps.indexOf(temps[i]) + 1} days ...`
    );
  }

  console.log(...tempStrings);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

// Advanced ES6
// What should I use? Map, .forEach, or .map?
const printForecast6 = temps => {
  const tempStrings1 = [`...`];

  const tempStrings2 = temps.map(
    temp => `${temp}*C in ${temps.indexOf(temp) + 1} days ...`
  );

  const tempStrings = [...tempStrings1, ...tempStrings2];

  console.log(...tempStrings);
};

printForecast6([17, 21, 23]);
printForecast6([12, 5, -5, 0, 4]);
*/

// Jona's Solution

// 1) Understand the problem
// - Array transformed into string, seperated by ellipses ...
// - What is X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Tranform array into a string
// - Transform each element to string with C*
// - String needs to contain the day (index + 1)
// - Add ellipses between elements and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}*C in ${i + 1} days ...`;
  }
  console.log(`... ` + str);
};

printForecast(data1);
printForecast(data2);

// Revised ES6 version with Jonas' Solution
// find a way to iterate a string without a for loop and using more advanced shit
const printForecast6v2 = temps => {
  let tempStrings = '';

  temps.forEach(curTemp => {
    let day = temps.indexOf(curTemp) + 1;
    tempStrings += `${curTemp}*C in ${day} days ...`;
  });

  console.log('... ' + tempStrings);
};

printForecast6v2([17, 21, 23]);
printForecast6v2([12, 5, -5, 0, 4]);
