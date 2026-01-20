/*Завдання 1: Оголошення змінних для примітивних типів

Створіть програму, в якій ви оголосите змінні для кожного з примітивних типів даних: 
рядок, число, буль, null та undefined. 
Присвойте їм значення та виведіть кожну змінну на консоль.*/

console.log("The primitive data types are: number, string, boolean, null, undefined, symbol, bigint ");
let num = 10;
let str = "A new string";
let bool = true;
let nul = null;
let undef = undefined;
let sym = Symbol("id");
let bInt = 123456789012345678901234567890n;
console.log(`
    number: num = ${num}, \n
    string: str = ${str}, \n
    boolean: bool = ${bool}, \n
    null: nul = ${nul}, \n
    undefined: undef = ${undef}, \n
    symbol: sym = ${sym.toString()}, \n
    bigint: bInt = ${bInt}
    `);