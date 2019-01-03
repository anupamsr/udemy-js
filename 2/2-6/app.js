// var, let, const

// var name = 'Anupam Srivastava';
// console.log(name);
// name = 'Something Else';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Cannot start with number

// // Multi word vars
// var firstName = ''; // Camel case for regular variables
// var FirstName = 'Tom'; // Pascal case for class constructors etc.

// LET
// let name;
// name = 'Anupam Srivastava';

// CONST
// const name = 'Anupam';
// console.log(name);
// name = 'Srivastava';
// const greeting;

// const person = {
//   name : 'Anupam Srivastava',
//   age : 35,
// };

// person.name = 'Someone else'
// person.age = 34;

// console.log(person);

// const name = 'Anupam Srivastava';
// console.log(typeof name);

// let val;
// val = String(10+5);
// val = String([1, 2, 3, 4]);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val = Number('5.5');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// val = parseInt('100.5');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());
// val = parseFloat('100.5');
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// const val1 = '5';
// const val2 = 6;
// const sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 60;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.5);
// val = Math.ceil(2.5);
// val = Math.floor(2.5);
// val = Math.sqrt(2);
// val = Math.abs(-2);
// val = Math.pow(2, 1/2);
// val = Math.min(3, 2, 4);
// val = Math.max(3, 2, 4);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

// var firstName = 'That\'s awesome, I can\'t wait';
// val = firstName.length;
// val = firstName.concat('... ', 'Test', 'ing', '.');
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();
// val = firstName[2];
// val = firstName.indexOf('a');
// val = firstName.lastIndexOf('a');
// val = firstName.charAt(25);
// val = firstName.charAt(firstName.length - 1);
// // val = firstName.substring(7, 14);
// // val = firstName.substring(7, -1);
// val = firstName.substring(7, 4);
// val = firstName.slice(7, 14);
// val = firstName.slice(7, -1);
// val = firstName.slice(7, 4);
// val = firstName.split(' ');
// val = 'a,,2,3,,';
// val = val.split(',');
// val = firstName.replace('a', '*');
// val = firstName.includes('some');

// console.log(val);

// // Template literals
// const name = 'Anupam';
// const age = 35;
// const job = 'Associate Architect';
// const city = 'Gurugram';

// // Without template strings (es5)
// let html = '<ul><li>NameL ' + name + '</li><li>Age : ' + age + '</li>' +
//   '<li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' +
//   '<li>Name: ' + name + '</li>' +
//   '<li>Age: ' + age + '</li>' +
//   '<li>Job: ' + job + '</li>' +
//   '<li>City: ' + city + '</li>' +
//   '</ul>';

// // With template strings (es6)
// function hello () {
//   return 'hello';
// }

// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//   </ul>`;

// document.body.innerHTML = html;

// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:7, b : 2}, new Date()];

// let val;

// val = numbers.length;
// val = Array.isArray(numbers);
// val = numbers[3];
// val = numbers[0];
// numbers[2] = 100;
// val = numbers.indexOf(36);

// MUTATING ARRAYS
// numbers.push(250);
// numbers.unshift(120);
// numbers.pop();
// numbers.shift();
// numbers.splice(1, 3);
// numbers.reverse();

// val = numbers.concat(numbers2);
// val = fruit.sort();
// val = numbers.sort();

// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// function under50 (num) {
//   return num < 50;
// }

// val = numbers.find(under50);

// function over50 (num) {
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

// const person = {
//   firstName: 'Anupam',
//   lastName: 'Srivastava',
//   age: 35,
//   email: 'anupam@a.com',
//   hobbies: ['music', 'sports'],
//   address : {
//     city: 'Gurugram',
//     state: 'HR'
//   },
//   getBirthYear: function () {
//     return 2018 - this.age;
//   },
// };

// let val;

// val = person;
// val = person.firstName;
// val = person['lastName'];
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   {name: 'Anupam', age: 'Srivastava'},
//   {name: 'Mike', age: 23},
//   {name: 'Nancy', age: 40},
// ];

// for (let i = 0; i < people.length; ++i) {
//   console.log(people[i].name);
// }

// let val;

// const today = new Date();
// let birthday = new Date('11-16-1983 13:00:00');
// birthday = new Date('November 16 1983');
// birthday = new Date('11/16/1983');
// val = today;
// val = today.toString();
// val = birthday;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();
// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);
// val = birthday;

// console.log(val);
// console.log(typeof val);

// var id;
// // if (typeof id === undefined) {
// if (typeof id === 'undefined') {
//   console.log(`This ID is ${id}`);
// } else {
//   console.log(`This ID is of type ${id}`);
// }

// let day;

// switch (new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(day);

// (function () {
//   console.log('IIFE Ran...');
// })();

// let i = 0;

// while (i < 10) {
//   console.log('Number' + i);
//   ++i;
// }

// const cars =  ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for (let i = 0; i < cars.length; ++i) {
//   console.log(cars[i]);
// }

// cars.forEach(function(car) {
//   console.log(car);
// });

// // MAP
// const users = [
//   {id: 1, name: 'Anupam'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'},
// ];

// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40,
// };

// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }

// alert('Hello, World!');

// const input = prompt();
// alert(input);

// if (confirm('Are you sure')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// let val;

// val = window.outerHeight;
// val = window.outerWidth;
// val = window.innerHeight;
// val = window.innerWidth;
// val = window.scrollY;
// val = window.scrollX;
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// // window.location.href = 'http://localhost:1000/'
// // window.location.reload();

// // window.history.go(-2);
// val = window.history.length;

// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// console.log(val);

// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope: ', a, b, c);

(function () {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Function Scope: ', a, b, c);
})();

console.log('Global Scope: ', a, b, c);

if (true) {
  // Block Scopes
  var a = 7;
  let b = 8;
  const c = 9;
  console.log('If Scope: ', a, b, c);
}

console.log('Global Scope: ', a, b, c);

for (let a = 0; a < 5; ++a) {
  console.log(`let Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);

for (var a = 0; a < 5; ++a) {
  console.log(`var Loop: ${a}`);
}

console.log('Global Scope: ', a, b, c);