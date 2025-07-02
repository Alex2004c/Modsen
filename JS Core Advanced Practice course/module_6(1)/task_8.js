'use strict';

function simulateAsyncOperation(taskName, delay) {
  return new Promise((resolve, reject) => {
    console.log(`[${new Date().toLocaleTimeString()}] -> Начинаем выполнять: ${taskName} (задержка ${delay} мс)`);
    
    setTimeout(() => {
      if (taskName === 'Задача 3') {
        
      } else {
        const result = `Результат от: ${taskName}`;
        console.log(`[${new Date().toLocaleTimeString()}] <- Завершено: ${taskName}`);
        resolve(result);
      }
    }, delay);
  });
}