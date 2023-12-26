// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

let myArray = [];

let len = parseInt(prompt(`Введите размер массива`));

for (let i = 0; i < len; i++) {
    myArray.push(i);
}

for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] === 0) {
        console.log(`${myArray[index]} - это ноль`)
    } else if (myArray[index] % 2 === 0) {
        console.log(`${myArray[index]} - это четное число`);
    } else {
        console.log(`${myArray[index]} - это нечетное число`);
    }
}

console.log(myArray);

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

let myArray2 = [1, 2, 3, 4, 5, 6, 7]
console.log(myArray2)
let newArray = myArray2.slice(0, 3).concat(myArray2.slice(5))
console.log(newArray)


// Задание 2
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
let myArray3 = []

for (let index = 0; index < 5; index++) {
    myArray3.push(Math.floor(Math.random(9) * 10));
}
console.log(myArray3)


// 1. Рассчитать сумму элементов этого массива
let sumArray3 = myArray3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumArray3);

// 2. Найти минимальное число
let minNum = Math.min(...myArray3)
console.log(minNum);

// 3. Найти есть ли в этом массиве число 3
let targetNum = 3
if (myArray3.includes(targetNum)) {
    console.log(`Число ${targetNum} найдено в массиве.`);

} else {
    console.log(`Число ${targetNum} не найдено в массиве.`);
}



