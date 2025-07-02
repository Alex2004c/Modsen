'use strict';

function increaseByTenPercent(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Аргумент должен быть массивом.');
  }

  const newArray = numbers.map(element => {
    if (typeof element === 'number') {
      return element * 1.1;
    }
    return element;
  });

  return newArray;
}