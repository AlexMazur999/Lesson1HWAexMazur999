// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

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

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let i = +prompt('Введіть номер квартири у буинку')
// if ( i > 0 && i <= 20 ) {
//     console.log('квартира знахоиться у 1 підїзді будинку')
// }
// else if (i > 21 && i <= 48) {
//     console.log('квартира знахоиться у 2 підїзді будинку')
// }
// else {
//     console.log('квартира знахоиться у 3 підїзді будинку')
// }


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести
// повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = (5)
// if (number === 10){
//     console.log('ВІРНО')
// }
// else {
//     console.log('НЕВІРНО')
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = +prompt('Введіть значення температури на дворі')
// if (temp >= 10 && temp <=22){
//     console.log('йдемо ВЧИТИСЯ')
//     alert('йдемо ВЧИТИСЯ')
// }
// else {
//     console.log('сидимо вдома і вчимося ОНЛАЙН')
//     alert('сидимо вдома і вчимося ОНЛАЙН')
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
//     І взалежності від введеного числа нам дається приз. (Авто, Мото, Телефон, і т.д )
//     і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let switchgame = +prompt('Введіть число від 1 до 5')
// switch (switchgame) {
//     case 1:
//         alert('Вітаємо, Ви виграли Автомобіль');
//         console.log('Вітаємо, Ви виграли Автомобіль');
//         document.writeln('Вітаємо, Ви виграли Автомобіль');
//         break
//
//     case 2:
//         alert('Вітаємо, Ви виграли мотоцикл');
//         console.log('Вітаємо, Ви виграли мотоцикл');
//         document.writeln('Вітаємо, Ви виграли мотоцикл');
//         break
//
//     case 3:
//         alert('Вітаємо, Ви виграли телефон');
//         console.log('Вітаємо, Ви виграли телефон');
//         document.writeln('Вітаємо, Ви виграли телефон');
//         break
//
//     case 4:
//         alert('Вітаємо, Ви виграли фен');
//         console.log('Вітаємо, Ви виграли фен');
//         document.writeln('Вітаємо, Ви виграли фен');
//         break
//
//     case 5:
//         alert('Вітаємо, Ви виграли горнятко');
//         console.log('Вітаємо, Ви виграли горнятко');
//         document.writeln('Вітаємо, Ви виграли горнятко');
//         break
//
//     default:
//         alert('Сьогоні ви сама слабка ланка, до зустрічі');
//         console.log('Сьогоні ви сама слабка ланка, до зустрічі');
//         document.writeln('Сьогоні ви сама слабка ланка, до зустрічі');
//
// }