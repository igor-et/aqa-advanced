/*Завдання 4: Обчислення площі та об'єму

Завдання 4.1

π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
Створіть змінну radius і присвойте їй числове значення радіуса кола.
Обчисліть площу кола за формулою π * radius^2 і виведіть результат.

Завдання 4.2

Створіть змінну length і присвойте їй числове значення довжини прямокутника.
Створіть змінну width і присвойте їй числове значення ширини прямокутника.
Обчисліть площу прямокутника за формулою length * width і виведіть результат.

Завдання 4.3

Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
Створіть змінну height і присвойте їй числове значення висоти циліндра.
Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
Округліть кожне отримане значення до 2 значень після крапки */

let radiusCircle = 10.5;
let areaCircle = Math.PI * radiusCircle ** 2;
console.log(`The area of a circle is equal ${Number(areaCircle.toFixed(2))}`);

let length = 10;
let width = 15;
let areaRectangle = length * width;
console.log(`The area of a rectangle is equal ${Number(areaRectangle.toFixed(2))}`);

let radiusCylinder = 10;
let height = 50; 
let areaCylinder = Math.PI * radiusCylinder ** 2 * height;
console.log(`The area of a cylinder is equal ${Number(areaCylinder.toFixed(2))}`);