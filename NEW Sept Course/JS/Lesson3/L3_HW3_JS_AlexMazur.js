// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3

// let x = 1;
// if (x === 0) {
//     console.log('NO');
// } else {
//     console.log('YES');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 46;
// if (time >= 0 && time <= 15) {
//     console.log('first');
// } else if (time >= 16 && time <= 30) {
//     console.log('second');
// } else if (time >= 31 && time <= 45) {
//     console.log('third');
// } else if (time >= 46 && time <= 60) {
//     console.log('fourth');
// } else {
//     console.log('error');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).


// let day = 32;
// if (day >=1 && day <=10)
//     console.log('persha decada');
// else if (day >=11 && day<=20)
//     console.log('dryga decada');
// else if (day >= 21 && day <=31)
//     console.log('tretya decada');
// else
//     console.log('takogo ne isnye')


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let dayofweek = +prompt();
// switch (dayofweek) {
//     case 1: console.log('Monday to start work'); brake;
//     case 2: console.log('Tuesday to work hardly'); brake;
//     case 3: console.log('Wednesday to make report'); brake;
//     case 4: console.log('Thursday to teach new product'); brake;
//     case 5: console.log('Friday to finish the depts'); brake;
//     case 6: console.log('Saturday to work half day'); brake;
//     case 7: console.log('Sanday to rest with family'); brake;
//     default: console.log('error');
// }


// - Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох .Також потрібно в
// рахувати коли введені рівні числа.


// let first = +prompt('Введіть перше число')
// let second = +prompt('Введіть друге число')
// if (first > second) {
//     console.log(first)
// }
// else if (first === second){
//     console.log('Введені числа однакові')
// }
// else {
//     console.log(second)
// }



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код
// який,за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
// falsy (хибноподыбне, тобто кастується до false)


// let x = +prompt() || 'default';
// console.log(x + ' ' + 'hello');


