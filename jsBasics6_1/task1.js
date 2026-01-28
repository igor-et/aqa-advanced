/*Завдання 1

Створіть функцію яка приймає два параметри: width і height.
Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)*/

function squareDeclaration (width, height) {
    return width * height;
}

const squareExpression = function (width, height) {
    return width * height;
}

const squareArrow = (width, height) => {
    return width * height;
}

console.log(`Площа прямокутника function declaration = ${squareDeclaration(5, 10)}`);
console.log(`Площа прямокутника function expression = ${squareExpression(5, 10)}`);
console.log(`Площа прямокутника arrow function= ${squareArrow(5, 10)}`);