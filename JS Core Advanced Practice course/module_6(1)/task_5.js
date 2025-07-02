'use strict';

function executePeriodically(operation, intervalMs, totalExecutions) {
  if (typeof operation !== 'function') {
    throw new Error('Первый аргумент должен быть функцией.');
  }
  if (typeof intervalMs !== 'number' || intervalMs <= 0) {
    throw new Error('Интервал должен быть положительным числом.');
  }
  if (typeof totalExecutions !== 'number' || totalExecutions <= 0) {
    return;
  }

  let executionCount = 0;

  const intervalId = setInterval(() => {
    executionCount++;
    
    operation(executionCount, totalExecutions);

    if (executionCount >= totalExecutions) {
      clearInterval(intervalId);
      console.log('--- Выполнение завершено ---');
    }
  }, intervalMs);
}