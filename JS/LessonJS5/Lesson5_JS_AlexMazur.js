// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// const sqvare1 = (a, b) => {
//     return a * b;
// }
// console.log(sqvare1(15, 30));
// document.write('Площа прямокутника:' + sqvare1(15, 30));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// const sqvare2 = (r) => {
//     return (3.14*(r^2))
// }
// console.log(sqvare2(20));
// document.write('Площа кола рівна:' + sqvare2(20))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const sqvare3 = (h, r) => {
//      return (2*3.14*r*h)
// }
// console.log(sqvare3(13, 8));
// document.write('Площа циліндра рівна:' + sqvare3(13, 8))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let massive1 = [15, 'qwerty', 193, 'owu', true, '156', 'new folder']
// const massive1elements = (massive1) =>
// {
//    for (let i = 0; i < massive1.length; i++){
//        console.log(massive1[i]);
//        document.writeln(massive1[i])}}
//     massive1elements (massive1)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// const xtxparagraf = (text) => {
//     document.write(`<p>${text}</p>`)
//     document.write(`<p><h3>${text}</h3></p>`)
//     document.write(`<p><b>${text}</b></p>`)
//     document.write(`<p>${text}</p>`)
//     document.write(`<hr>`)
// }
// xtxparagraf('Навчатися in "OWU school" мене пре)))))0_о')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const createul = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// createul('Казочка про курочку рябу')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//
// const createUlcycle = (text, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// createUlcycle('ліжка з дому', 15);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let massive2 = [false,'Авокадо', 385 , 'Стрінги', 'boolean', 'book', 745];
// const elements = (app) => {
//     document.write(`<ul>`)
//         for (let i = 0; i < app.length; i++) {
//             document.write(`<li>${app[i]}</li>`);
//         }
//     document.write(`</ul>`)
// }
// elements(massive2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let massive3 = [
//     {id: 1, name: 'Alex', age: 33},
//     {id: 2, name: 'Vika', age: 43},
//     {id: 3, name: 'Solomia', age: 6},
//     {id: 4, name: 'Igor', age: 51},
//     {id: 5, name: 'Olena', age: 47},
//     ];
// const elements = (mass3) => {
//     for (const elements of mass3) {
//         document.write(`<div>${elements.id}.${elements.name} - ${elements.age}</div>`)
//     }
// }
// elements(massive3)