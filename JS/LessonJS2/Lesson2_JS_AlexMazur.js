// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Введіть хвилину від 0 до 59');
// if (time >= 0 && time <= 14)
// {
//     console.log('Перша чверть')
// }
// else if (time >= 15 && time <= 29)
// {
//     console.log('Друга чверть')
// }
// else if (time >= 30 && time <= 44)
// {
//     console.log('Третя чверть')
// }
// else if (time >= 45 && time <= 59)
// {
//     console.log('Четверта чверть')
// }
// else {
//     console.log('Упс,щось пішло не так)))Спробуйте заново')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = prompt('ввести число,що має 31 день у місяці');
// if (day >= 1 && day <= 10)
// {
//     console.log('Перша декада')
// }
// else if (day >= 11 && day <= 20)
// {
//     console.log('Друга декада')
// }
// else if (day >= 21 && day <= 30)
// {
//     console.log('Третя декада')
// }
// else if (day <= 31)
// {
//     console.log('Четверта декада')
// }
// else {
//     console.log('Нажаль місяця з таким днем не існує')
// }
//
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// для первірки правди:

// let test = true;
// if (test === true) {
//     console.log('Вірно')
// }
// else {
//     console.log('Невірно')
// }
// тернарка:
// let test = true;
// acess = test ? "Вірно" : "Невірно"
// console.log(acess)

// для перевірки брехні:

// let test = 'qwerty';
// if (test === true) {
//     console.log('Вірно')
// }
// else {
//     console.log('Невірно')
// }
// тернарка:
// let test = false;
// acess = test ? "Вірно" : "Невірно"
// console.log(acess)

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = prompt('Ввести число 0,1 або -3')
// if (a == 0) {console.log('Вірно')}
// else {console.log('Невірно')}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let weekdays = +prompt('Ввести дні тижня, де 1 -Понеділок...7 -Неділя')
// switch (weekdays) {
//     case 1: console.log('Понеділок: скласти план роботи на тиждень');
//     break;
//     case 2: console.log('Вівторок: Замовити доставку товару');
//     break;
//     case 3: console.log('Середа: провести інструктаж з охорони праці працівникам');
//     break;
//     case 4: console.log('Четвер: допомогти скласти шафу у школі');
//     break;
//     case 5: console.log('Пятниця: Проаналізувати кінець робочого тижня');
//     break;
//     case 6: console.log('Субота: провести генеральне прибирання в дома');
//     break;
//     case 7: console.log('Неділя: поїхати з дітьми в Їжак Парк');
//     break;
//     default: console.log('Некоректний день тижня')
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let fullyear = prompt('Ввести номінал року, наприклад:2021...1988')
// if(fullyear % 4 ===0) {
//     console.log('Рік Високосний');}
// else {console.log('Звичайний рік')}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
//
// let whatjsname = prompt('Напишіть „Яка «офіційна» назва JavaScript?“')
// if (whatjsname === 'ECMAScript') {
//     alert('Правильно')
// }
// else {alert('«Не знаєте? ECMAScript!')}

// let whatjsname = prompt('Напишіть „Яка «офіційна» назва JavaScript?“')
//     if (whatjsname === 'ECMAScript') {
//         console.log('Правильно')}
//     else { console.log('«Не знаєте? ECMAScript!')}
