/*Завдання 4: Відбір парних чисел

Вам потрібно створити програму, яка відфільтровує парні числа з масиву.*/ 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray = array.filter((number) => {
    return number % 2 === 0;
});
console.log(evenArray);

let resultValue = []; // для перевірки
for (let i = 0; i < array.length; i++) {    
    if (array[i] % 2 === 0) {
        resultValue.push(array[i]);
    }
}

console.log(resultValue);