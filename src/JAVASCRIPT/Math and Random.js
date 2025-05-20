Math();

const number = 75.57878;

const integerValue = Math.round(number); // .5 and above rounds up, below .5 rounds down

const number = 75.27878;

const integerValue = Math.ceil(number); // rounds up to the nearest integer

const number = 75.97878;

const integerValue = Math.floor(number); // rounds down to the nearest integer

const integerValue = Math.trunc(number); // removes the decimal part of the number

const absValue = Math.round(Math.abs(-5.7676)); // returns the absolute value of a number

const number = 75.57878;

const integerValue = Number(number.toFixed(4)); // returns 75.5788

console.log(integerValue); // returns 75.5788

// Random

const random = Math.random();

const randomValue = Math.floor(random * 10000000); // generates a random number between 0 and 9999999
