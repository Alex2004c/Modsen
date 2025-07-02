'use strict';

function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new Error('Аргумент должен быть неотрицательным целым числом.');
  }

  if (n === 0) {
    return 1;
  }

  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }

  return result;
}