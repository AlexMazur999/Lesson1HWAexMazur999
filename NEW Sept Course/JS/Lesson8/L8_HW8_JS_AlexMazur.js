// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)// - Взяти масив з  User[] з попереднього завдання,
// та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname =surname;
//     this.email = email;
//     this.phone = phone;
// }
// const user1 = new User(1,'Vasya','Bey','emeil1@gmail.com','123432789');
// const user2 = new User(2,'Igor','Solik','emeil2@gmail.com','123486789');
// const user3 = new User(3,'Olga','Drogovich','emei3@gmail.com','123626789');
// const user4 = new User(4,'Vanessa','Prihodko','emeil4@gmail.com','125956789');
// const user5 = new User(5,'Sasha','Mazur','emeil5@gmail.com','983456789');
// const user6 = new User(6,'Oleh','Savchyk','emeil6@gmail.com','189456789');
// const user7 = new User(7,'Bogdan','Pastuh','emeil7@gmail.com','123452189');
// const user8 = new User(8,'Tomas','Abramov','emeil8@gmail.com','157456789');
//
// const arrayUsers = [];
//
// arrayUsers.push(user1, user2, user3, user4, user5, user6, user7, user8);
//
// let filter = arrayUsers.filter(value => value.id % 2 ===0);
// console.log(filter);
// console.log(arrayUsers.sort((a, b) => b.id - a.id));





// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class  Client{
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const user1 = new Client(1,'Vasya','Bey','emeil1@gmail.com','123432789',[1,1,2]);
// const user2 = new Client(2,'Igor','Solik','emeil2@gmail.com','123486789',[1,1,3,4]);
// const user3 = new Client(3,'Olga','Drogovich','emei3@gmail.com','123626789',[2,1]);
// const user4 = new Client(4,'Vanessa','Prihodko','emeil4@gmail.com','125956789',[2]);
// const user5 = new Client(5,'Sasha','Mazur','emeil5@gmail.com','983456789',[2,2,4,5,6]);
// const user6 = new Client(6,'Oleh','Savchyk','emeil6@gmail.com','189456789',[3,1,2,10,1,5,3]);
// const user7 = new Client(7,'Bogdan','Pastuh','emeil7@gmail.com','123452189',[3,2,1,15,9,7,8,1]);
// const user8 = new Client(8,'Tomas','Abramov','emeil8@gmail.com','157456789',[3,2,5,1,1,1,1,1,1,1]);
// const user9 = new Client(9,'Irka','Krasiva','emeil9@gmail.com','157456789',[3,2,5,2,5,4,5,6]);
// const user10 = new Client(10,'Miwanja','Broda','emeil10@gmail.com','157456789',[3,8]);
//
//
//
// const arrayUsers = [];
//
// arrayUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// console.log(arrayUsers.sort((a, b) => a.order.length - b.order.length));



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- engine () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model,producer,year,maxSpeed,engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.engine = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     }
//
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} --- ${this[carKey]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('Nissan','Japan','2015',193,1.2);
// console.log(car);
// car.engine();
// car.info();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver({name: 'Alex'});
// console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model,producer,year,maxSpeed,carEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.carEngine = carEngine;
//     }
//
//
//     engine () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
//     }
//
//     info () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== 'function'){
//                 console.log(`${carKey} --- ${this[carKey]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('Volkswagen','Germany','2003',215,2.5);
// console.log(car);
// car.engine();
// car.info();
// car.increaseMaxSpeed(25);
// car.changeYear(2020);
// car.addDriver({name: 'Igor'});
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// function Cinderella(name,age,footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// const cinderella1 = new Cinderella('Ira',23,35);
// const cinderella2 = new Cinderella('Anya',23,36);
// const cinderella3 = new Cinderella('Olga',23,37);
// const cinderella4 = new Cinderella('Kristina',23,34);
//
// const arrayOfCinderella = [];
// arrayOfCinderella.push(cinderella1,cinderella2,cinderella3,cinderella4);
//
// class Prince{
//
//     constructor(name, age, findFootSize) {
//         this.name = name;
//         this.age = age;
//         this.findFootSize = findFootSize;
//     }
// }
//
// const prince = new Prince('Seryj',29,36);
//
// const findCinderellas = (arr,boy) => {
//     for (const item of arr) {
//         if (item.footSize === boy.findFootSize) {
//             console.log(`My cinderella is ${item.name}`);
//         }
//     }
// }
//
// findCinderellas(arrayOfCinderella,prince);
//
// let find = arrayOfCinderella.find(value => value.footSize === prince.findFootSize);
// console.log(find);