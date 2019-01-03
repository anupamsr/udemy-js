// Person constructor

// function Person (name, dob) {
//   this.name = name;
//   this.birthday = new Date(dob);
//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday;
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// const brad = new Person('Brad', 'Septempber 12 2009');
// const john = new Person('John', '11-16-1983');

// console.log(brad.calculateAge());
// const name1 = 'Anupam';
// const name2 = new String('Srivastava');
// console.log(name1);
// console.log(name2);

// if (name1 == 'Anupam') {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(typeof num1);
// console.log(typeof num2);

// const getSum1 = function (x, y) {
//   return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return x + y;');

// console.log(getSum1);
// console.log(getSum2);

// console.log(getSum1(2, 3));
// console.log(getSum2(2, 3));

// const arr1 = [1, 2, 3, 4];
// const arr2 = new Array(1, 2, 3, 4);

// console.log(arr1);
// console.log(arr2);

// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re1);
// console.log(re2);

//Object.prototype
//Person.prototype

// Person constructor

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function () {
//   //   const diff = Date.now() - this.birthday;
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// };

// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday;
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// }

// Person.prototype.getsMarried = function (newLastName) {
//   this.lastName = newLastName;
// }

// const anupam = new Person('Anupam', 'Srivastava', '11-16-1983');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary);
// console.log(anupam.calculateAge());
// console.log(anupam.getFullName());
// mary.getsMarried('Smith');
// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// // Person constructor
// function Person (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// // Greeting
// Person.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person('Anupam', 'Srivastava');

// console.log(person1.greeting());

// // Customer constructor
// function Customer (firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);
//   this.phone = phone;
//   this.membership = membership;
// }

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
// console.log(customer1);

// // Custom customer greeting
// Customer.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }
// console.log(customer1.greeting());

// const personPrototypes = {
//   greeting: function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function (newLastName) {
//     this.lastName = newLastName;
//   }
// };

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// console.log(mary);

// mary.getsMarried('Thompson');
// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Traversy'},
//   age: {value: 36},
// });

// console.log(brad);
// console.log(brad.greeting());

// class Person {
//   constructor (firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge () {
//     const diff = Date.now() = this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried (newLastName) {
//     this.lastName = newLastName;
//   }

//   static addNumbers (x, y) {
//     return x + y;
//   }
// }

// const anupam = new Person('Anupam', 'Srivastava', '11-16-1983');

// console.log(anupam);

// anupam.getsMarried('Ankita');

// console.log(anupam);

// console.log(Person.addNumbers(1, 2));

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor (firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost ()  {
    return 500;
  }
}

const anupam = new Customer('Anupam', 'Srivastava', '9845527517', 'Standard');

console.log(anupam.greeting());
console.log(Customer.getMembershipCost());

console.log(Person);
console.log(Customer);