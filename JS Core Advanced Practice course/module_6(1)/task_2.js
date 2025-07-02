'use strict';

function demonstrateScope() {
  console.log('--- Начало выполнения функции ---');

  if (true) {
    console.log('\n--- Внутри блока ---');
    var x_var = 'значение var';
    let x_let = 'значение let';
    const x_const = 'значение const';

    console.log('Доступ к var внутри блока:', x_var);
    console.log('Доступ к let внутри блока:', x_let);
    console.log('Доступ к const внутри блока:', x_const);
  }

  console.log('\n--- Снаружи блока, но внутри функции ---');

  console.log('Доступ к var снаружи блока:', x_var);

  try {
    console.log('Доступ к let снаружи блока:', x_let);
  } catch (error) {
    console.error('Ошибка при доступе к let:', error.message);
  }

  try {
    console.log('Доступ к const снаружи блока:', x_const);
  } catch (error) {
    console.error('Ошибка при доступе к const:', error.message);
  }
}

demonstrateScope();