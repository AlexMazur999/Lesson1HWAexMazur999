// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let massive1 = [[7,17,35,48,20],['water','phone','kaka','ball','trimer'],['window', true, 19, false, 'meter']]
// console.log(massive1[0])
// console.log(massive1[1])
// console.log(massive1[2])

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let massiv2 = []
// massiv2[0] = 'false';
// massiv2[1] = 'Alex';
// massiv2[2] = 23;
// massiv2[3] = 'full';
// massiv2[4] = false;
// massiv2[5] = 98;
// massiv2[6] = 'wardrobe';
// massiv2[7] = 56;
// massiv2[8] = 'cup';
// massiv2[9] = 'Редиска';
// massiv2[10] = 'мама';
// massiv2[11] = 7913;
// console.log(massiv2)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>без resolve трохи впряжно</div>`);
// }
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} - довільний текст </div>`);
// }
// let q =0;
// while(q<20){
//     document.write(`<div><h1>давай танцуй</h1></div>`);
//     q++;
// }

// let olx =0;
// while(olx<20){
//     document.write(`<div><h1>${olx} - Ще трохи тексту з інексом</h1></div>`);
//     olx++;
// }


// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let massive3 = [2, 17, 25, 152, 365, 4521, 698, 4568, 845, 219]
// for (i = 0; i<10; i++)
// {console.log(massive3[i])}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let massive4 = ['apple', 'qwerty', 'engand', 'profi', 'owu', 'lamp', 'sun', 'sand', 'arara', 'leg']
// for (i = 0; i<massive4.length; i++)
// {console.log(massive4[i])}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let massive5 = ['apple', 25, 'england', 39, 'owu', true, 'sun', false, 'arara', 985]
// for (i = 0; i<massive5.length; i++)
// {console.log(massive5[i])}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let massive6 = ['apple', 25, 'england', 39, 'owu', true, 'sun', false, 'arara', []]
// for (i = 0; i<massive6.length; i++)
// if(typeof massive6[i] === 'boolean')
// {console.log(massive6[i])}

//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let massive7 = ['apple', 25, 'england', 39, 'owu', true, 'sun', false, 'arara', 37]
// for (i = 0; i<massive7.length; i++)
//     if(typeof massive7[i] === 'number')
//     {console.log(massive7[i])}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let massive8 = ['apple', 25, 'england', 39, 'owu', true, 'sun', false, 'arara', 37]
// for (i = 0; i<massive8.length; i++)
//     if(typeof massive8[i] === 'string')
//     {console.log(massive8[i])}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let massiv9 = []
// massiv9[0] = 'false';
// massiv9[1] = 'Alex';
// massiv9[2] = 23;
// massiv9[3] = 'full';
// massiv9[4] = false;
// massiv9[5] = 98;
// massiv9[6] = 'wardrobe';
// massiv9[7] = 56;
// massiv9[8] = 'cup';
// massiv9[9] = 'Редиска';
// console.log(massiv9)
// document.write(massiv9)

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<10; i++)
// {console.log('Поточний номер кроку:'+ i +';');
// document.writeln('Поточний номер кроку:'+ i +';');}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<100; i++)
// {console.log('Поточний номер кроку:'+ i +';');
// document.writeln('Поточний номер кроку:'+ i +';');}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i=0; i<=50; i++)
// {console.log('Поточний номер кроку:'+ i*2 +';');
// document.writeln('Поточний номер кроку:'+ i*2 +';');}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i=0; i<100; i++)
// {if ( i % 2 ===0)
// {console.log('парний крок циклу:' + i + ';')
// document.writeln('парний крок циклу:' + i + ';')}}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i=0; i<100; i++)
// {if ( i % 2 ===1)
// {console.log('непарний крок циклу:' + i + ';')
// document.writeln('непарний крок циклу:' + i + ';')}}

