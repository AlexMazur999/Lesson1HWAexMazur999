// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let x1 = 'hello world';
// console.log(x1.length);
//
// let x2 = 'lorem ipsum'
// console.log(x2.length);
//
// let x3 = 'javascript is cool'
// console.log(x3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let x1 = 'hello world';
// console.log(x1.toUpperCase());
//
// let x2 = 'lorem ipsum'
// console.log(x2.toUpperCase());
//
// let x3 = 'javascript is cool'
// console.log(x3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let x1 = 'HELLO WORLD';
// console.log(x1.toLowerCase());
//
// let x2 = 'LOREM IPSUM'
// console.log(x2.toLowerCase());
//
// let x3 = 'JAVASCRIPT IS COOL'
// console.log(x3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let strings = str.split(' ');
// console.log(strings);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let mass1 = [10,8,-7,55,987,-1011,0,1050,0]
// let strings = mass1.map(value => value.toString())
// console.log(strings)

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//
// let nums = [11,21,3];
// sortNums(nums,'ascending')
// sortNums(nums,'descending')

// let nums = [11, 21, 3];
//
// const sortNums = (direction, arr) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// }
// console.log(sortNums('ascending', nums));
// console.log(sortNums('descending', nums));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
//
// console.log(coursesAndDurationArray.sort((a, b) =>
//     b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);

// описати колоду карт

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let suits = [
//     {cardSuit: 'heart', color: 'red'},
//     {cardSuit: 'diamond', color: 'red'},
//     {cardSuit: 'spade', color: 'black'},
//     {cardSuit: 'clubs', color: 'black'},
// ]
// let cardNames = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// let deck = [];
//
// for (let suit of suits) {
//     for (let cardName of cardNames) {
//         let card = {
//             cardSuit: suit.cardSuit,
//             value: cardName,
//             color: suit.color
//         }
//         deck.push(card);
//     }
// }
// deck.push({cardSuit: 'joker', value: null, color: 'red'});
// deck.push({cardSuit: 'joker', value: null, color: 'black'});
// console.log(deck);
//
// // - знайти піковий туз
//
// let as = deck.filter(value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(as);
//
// // - всі шістки
//
// let allsix = deck.filter(value => value.value === 6);
// console.log(allsix);
//
// // - всі червоні карти
//
// let redcolors = deck.filter(value =>value.color === 'red');
// console.log(redcolors);
//
// // - всі буби
//
// let alldiamond = deck.filter(value =>value.cardSuit === 'diamond');
// console.log(alldiamond);
//
// // - всі трефи від 9 та більше
//
// let allclubs = deck.filter(value =>(value.cardSuit === 'clubs' && value.value >= 9)
//     ||    (value.cardSuit === 'clubs' && typeof value.value === 'string'));
// console.log(allclubs);
//
// let allclubb = deck.filter(value =>value.cardSuit === 'clubs' && value.value >= '9' || value.value === '10');
// console.log(allclubb);

