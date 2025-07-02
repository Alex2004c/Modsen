'use strict';

class NotIntegerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotIntegerError';
  }
}

function processInteger(number) {
  if (!Number.isInteger(number)) {
    throw new NotIntegerError(`Значение "${number}" не является целым числом.`);
  }
  
  console.log(`Число ${number} успешно прошло проверку.`);
}

console.log('--- Тестирование функции ---');

try {
  processInteger(100);

  console.log('\nПопытка обработать 3.14...');
  processInteger(3.14);

} catch (error) {
  if (error instanceof NotIntegerError) {
    console.error(`Ошибка валидации: ${error.message}`);
    console.error(`Тип ошибки: ${error.name}`);
  } else {
    console.error('Произошла непредвиденная ошибка:', error);
  }
}

try {
  console.log('\nПопытка обработать "текст"...');
  processInteger('текст');

} catch (error) {
  if (error instanceof NotIntegerError) {
    console.error(`Ошибка валидации: ${error.message}`);
    console.error(`Тип ошибки: ${error.name}`);
  } else {
    console.error('Произошла непредвиденная ошибка:', error);
  }
}