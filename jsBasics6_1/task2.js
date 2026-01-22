/*Завдання 2

Створіть функцію яка приймає один параметр: age.
Усередині функції перевірте, чи age більше або рівне 18.
Якщо age відповідає умові, поверніть true, інакше поверніть false.
Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку. */

function isPersonAdult(age) {
    return age >= 18;
}

const printIsPersonAdult = function (age) {
    const isAdult = isPersonAdult(age);
    if (isAdult) {
        return "Особа доросла";
    } else return "Особа неповнолітня";
   
}

console.log(`${isPersonAdult(25)}, ${printIsPersonAdult(25)}`);
console.log(`${isPersonAdult(15)}, ${printIsPersonAdult(15)}`);

