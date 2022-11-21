// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function sqvare1(a, b){
//    let sqvare1 = a*b
//     return sqvare1
// }
// console.log(sqvare1(20, 40));
// document.write('Площа прямокутника:' + sqvare1(20, 40))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sqvare2(r) {
//     let sqvare2 = 3.14*(r^2)
//     return sqvare2
// }
// console.log(sqvare2(12));
// document.write('Площа кола рівна:' + sqvare2(12))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function sqvare3(h, r){
//     let sqvare3 = 2*3.14*h*r
//     return sqvare3
// }
// console.log(sqvare3(7, 21));
// document.write('Площа циліндра рівна:' + sqvare3(7, 21))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let massive1 = [15, 'qwerty', 95, 'owu', true, '874', 'new folder']
// function massive1elements (massive1) {
//    for (let i = 0; i < massive1.length; i++){
//        console.log(massive1[i]);
//        document.writeln(massive1[i])}
// }
//     massive1elements (massive1)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function arg(text) {
//     document.write(`<p>${text}</p>`);
// }
// arg('Hi man');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function create3ul (text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// create3ul('Казочка про курочку рябу')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function createUlcycle(text, number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// createUlcycle('ліжка', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let massive2 = [false,'Авокадо', 385 , 'Стрінги', 'boolean', 'book', 745];
// function elements (app){
//     document.write(`<ul>`)
//         for (let i = 0; i < app.length; i++) {
//             document.write(`<li>${app[i]}</li>`);
//         }
//     document.write(`</ul>`)
// }
// elements(massive2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для ' +
// 'кожного об'єкту окремий блок.

// let massive3 = [
//     {id: 1, name: 'Alex', age: 33},
//     {id: 2, name: 'Vika', age: 43},
//     {id: 3, name: 'Solomia', age: 6},
//     {id: 4, name: 'Igor', age: 51},
//     {id: 5, name: 'Olena', age: 47},
//     ];
// function elements (mass3) {
//     for (const elements of mass3) {
//         document.write(`<div>${elements.id}.${elements.name} - ${elements.age}</div>`)
//     }
// }
// elements(massive3)

// - створити функцію яка повертає найменьше число з масиву

// const arr = [15,2,-7,0,100500,13,-21];
// const minItem = function (array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(minItem(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1,2,10];
// const foo = (array) => {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
//     return sum;
// };
// let number = foo(arr);
// console.log(number);


