// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

function fahrenheit(celsius) {
    return (9 / 5) * celsius + 32;
}

let celsius = prompt('Введите температуру в градусах Цельсия:');

if (celsius !== null && celsius !== "") {
    celsius = parseFloat(celsius);
    let result = fahrenheit(celsius);
    alert(`Температура в градусах Фаренгейта: ${result}`);
} else {
    alert('Вы не ввели температуру.');
}

// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. 
// Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. 
// Вывести значение переменной admin в консоль.

let name = 'Sergey'
let admin = name
console.log(admin)