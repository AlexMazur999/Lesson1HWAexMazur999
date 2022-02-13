// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let lenthfirsttxt = 'hello world';
// console.log(lenthfirsttxt.length);
//
// let lenthsecondtxt = 'lorem ipsum';
// console.log(lenthsecondtxt.length);
//
// let lenththirdtxt = 'javascript is cool';
// console.log(lenththirdtxt.length);
//
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let lenthfirsttxt = 'hello world';
// let upfirst = lenthfirsttxt.toUpperCase()
// console.log(upfirst)
//
// let lenthsecondtxt = 'lorem ipsum';
// let upsecond = lenthsecondtxt.toUpperCase()
// console.log(upsecond)
//
// let lenththirdtxt = 'javascript is cool';
// let upthird = lenththirdtxt.toUpperCase()
// console.log(upthird)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let lenthfirsttxt = 'HELLO WORLD';
// let downfirst = lenthfirsttxt.toLowerCase()
// console.log(downfirst)
//
// let lenthsecondtxt = 'LOREM IPSUM';
// let downsecond = lenthsecondtxt.toLowerCase()
// console.log(downsecond)
//
// let lenththirdtxt = 'JAVASCRIPT IS COOL';
// let downthird = lenththirdtxt.toLowerCase()
// console.log(downthird)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let dirty = ' dirty string   ';
// console.log(dirty.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);
// document.write(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, i) => {
//     return str.substr(0, i);
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 6));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => {
//     let splitstrupper = str.split(' ').join('-').toUpperCase();
//     return splitstrupper;
// }
// let string = "HTML JavaScript PHP";
// console.log(insert_dash(string));
// document.write(insert_dash(string))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let firsttxtUp = (str) => {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1)
// };
// document.write(firsttxtUp('hello durling'));
// console.log(firsttxtUp('hello durling'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('привіт мене звати сашко мазур'));
// console.log(capitalize('привіт мене звати сашко мазур'));