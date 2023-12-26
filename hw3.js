// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const upCube = (number) => {
    return number ** 3
}

console.log(upCube(2) + upCube(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const calculateSalary = (salary) => {
    const parsedSalary = parseFloat(salary);

    if (isNaN(parsedSalary) || parsedSalary < 0) {
        console.log('Значение задано неверно');
        return;
    }

    const netSalary = parsedSalary - (parsedSalary * 0.13);
    return netSalary;
};

const userInput = prompt("Введите число");
const result = calculateSalary(userInput);

if (result !== undefined) {
    console.log(`Размер заработной платы за вычетом налогов равен ${result}`);
} else {
    console.log('Ошибка в расчете заработной платы');
}


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const findMax = (num1, num2, num3) => {
    return Math.max(num1, num2, num3)
};

let num1 = parseFloat(prompt("Введите число"));
let num2 = parseFloat(prompt("Введите число"));
let num3 = parseFloat(prompt("Введите число"));

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    const maxNumber = findMax(num1, num2, num3);
    console.log("Максимальное число: " + maxNumber);
} else {
    console.log("Введите корректные числа.");
}

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const sum = (a, b) => a + b;
const subtract = (a, b) => (a == b ? 0 : Math.abs(a - b));
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : 0);

console.log(sum(5, 3))
console.log(subtract(10, 2))
console.log(multiply(2, 4))
console.log(divide(16, 2))