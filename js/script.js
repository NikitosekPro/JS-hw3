// task 1


const result = 5 + 5 + "5";

console.log(result);

console.log(typeof result);


// task 2

const email = "example@gmail.com"
const checkEmail = email.includes("@");
const countSymbolsOfEmail = email.indexOf("@");
const emailLength = email.length;
console.log(checkEmail , countSymbolsOfEmail , emailLength);


// task 3



const my = "My"
const kaka = "name"
const is = "is"
const dot = "."

const userName = "Victor";

let fullName = `${my} ${kaka} ${is}`;
fullName = fullName + userName;

const fullName2 = my + name + is + userName;


// 4. Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного 
// рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»

const userrName = "Олександро";
const payment = 300;
alert(`Дякую, ${userrName} До сплати ${payment} гривень`);




// task 5 


const fruit = 'апельсин';
console.log(fruit[0]);
console.log(fruit[fruit.length -1]);

// task 6

// 6. знайди індекс фрази "neiS" в рядку  "Jason Neis" 
// Здійсни перевірку незалежно від регістру


const str = "Jason Neis".toLowerCase();
const searchString = "neiS"
console.log(str.indexOf(searchString.toLowerCase()));





