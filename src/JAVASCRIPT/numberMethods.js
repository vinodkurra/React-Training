const number = 111;

const value = number.toString(); ///

const fixedNumber = 89.66666666;
const fixedValue = fixedNumber.toFixed(2);

const updatedValue = fixedNumber.toPrecision(4);

console.log(
  typeof value,
  Number(fixedValue),
  parseFloat(updatedValue),
  parseInt(updatedValue) ///
);

console.log(Number(true), Number(false), Number(12345), Number(`111`));
