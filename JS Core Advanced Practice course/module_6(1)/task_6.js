'use strict';

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayInfo() {
    console.log(`Имя: ${this.name}`);
    console.log(`Возраст: ${this.age}`);
    console.log(`Страна: ${this.country}`);
  }
}

console.log('--- Человек 1 ---');
const person1 = new Person('Иван Петров', 30, 'Россия');
person1.displayInfo();

console.log('\n--- Человек 2 ---');
const person2 = new Person('Maria Garcia', 25, 'Испания');
person2.displayInfo();