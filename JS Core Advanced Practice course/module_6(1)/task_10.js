'use strict';

function executeWithDelay(callback) {
  if (typeof callback !== 'function') {
    throw new Error('Аргумент должен быть функцией.');
  }
  
  setTimeout(callback, 2000);
}

const myAction = () => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`[${timestamp}] Коллбэк-функция была вызвана!`);
};

console.log(`[${new Date().toLocaleTimeString()}] Запускаем функцию с задержкой...`);

try {
  executeWithDelay(myAction);
} catch (error) {
  console.error(`Произошла ошибка: ${error.message}`);
}

console.log('Это сообщение появится сразу, не дожидаясь выполнения коллбэка.');