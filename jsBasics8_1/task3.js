/*Завдання 3: Обчислення суми елементів масиву

Вам потрібно створити програму, яка обчислює суму всіх елементів у масиві за допомогою методу reduce. */

const arr = [10, 20, 30, 40, 50];
const resulrSum = arr.reduce((accum, currentValue) => accum + currentValue, 0);
console.log(resulrSum);

let sum = 0; // для перевірки
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);