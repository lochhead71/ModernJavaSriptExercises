// SECTION 5.1

// Person constructor
// function Person(name, dob) {
//    this.name = name;
//    // this.age = age;
//    this.birthday = new Date(dob);
//    // console.log(this);
//    this.calculateAge = function(){
//       const diff = Date.now() - this.birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getUTCFullYear() - 1970);
//    }
// }

// const shlocky = new Person('Shlocky', 50);
// const rusty = new Person('Rusty', 17);

// const shlocky = new Person('Shlocky', '06-22-1971');
// console.log(shlocky.calculateAge());

// SECTION 5.2

// Strings
// const name1 = 'Jeff';
// const name2 = new String('Jeff');
// // console.log(name2);
// // console.log(typeof name2);

// if(name2 == 'Jeff') {
//    console.log('Huzzah!');
// } else {
//    console.log('Yowza!');
// }

// const num1 = new Number('44');
// console.log(num1);

// SECTION 5.3

// Object.prototype

// Person constructor
// function Person(firstName, lastName, dob) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.birthday = new Date(dob);
// }

// Person.prototype.calculateAge = function(){
//    const diff = Date.now() - this.birthday.getTime();
//    const ageDate = new Date(diff);
//    return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get Full Name
// Person.prototype.getFullName = function(){
//    return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married
// Person.prototype.getsMarried = function(newLastName){
//    this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe', '02-21-1965');
// const mary = new Person('Mary', 'Johnson', 'Sep 20 1982');
// console.log(john, mary);
// console.log(john.calculateAge());
// console.log(john.getFullName());
// mary.getsMarried('Buttafuoco');
// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// SECTION 5.4

// Greeting Example
// Person.prototype.greeting = function(){
//    return `Hello, ${this.firstName}!`;
// }

// const person1 = new Person('Rusty', 'Speedracer');
// // console.log (person1.greeting());

// // customer constructor
// function Customer(firstName,lastName, phone, membership){
//    Person.call(this, firstName, lastName);
//    this.phone = phone;
//    this.membership = membership;
// }

// // Inherit Person protoype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // create a customer
// const cust1 = new Customer('Rusty', 'Speedracer', '210-555-1234', 'Standard');
// console.log(cust1);

// // Customer greeting
// Customer.prototype.greeting = function(){
//    return `Thanks for your business, ${this.firstName}!`;
// }

// console.log(cust1.greeting());

// SECTION 5.5

// const personProtypes = {
//    greeting: function() {
//       return `Hello, ${this.firstName} ${this.lastName}.`;
//    },
//    getsMarried: function(newLastName) {
//       this.lastName = newLastName;  
//    }
// }

// const cust1 = Object.create(personProtypes);
// cust1.firstName = 'Mary';
// cust1.lastName = 'Buggin';
// cust1.membType = 'Standard';

// cust1.getsMarried('Contrary');
// console.log(cust1.greeting());

// const cust2 = Object.create(personProtypes, {
//    firstName: {value: 'Brad'},
//    lastName: {value: 'Mackanene'},
//    membType: {value: 'Premiere'}
// });

// console.log(cust2);

// SECTION 5.6

// class Person {
//    constructor(firstName, lastName, dob){
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.birthday = new Date(dob);
//    }
//    greeting(){
//       return `Hello ${this.firstName}!`
//    }
//    calculateAge(){
//       const diff = Date.now() - this.birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getUTCFullYear() - 1970);
//    }
//    getsMarried(newLastName){
//       this.lastName = newLastName;
//    }
//    static addNumbers(x,y){
//       return x + y;
//    }
// }

// const mary = new Person('Mary', 'Buggin', '11-12-98');
// mary.getsMarried('Contrary');
// console.log(mary);

// SECTION 5.7

class Person {
   constructor(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
   }
   greeting(){
      return `Hello ${this.firstName}!`
   }
}

class Customer extends Person {
   constructor(firstName, lastName, phone, membType){
      super(firstName, lastName);
      this.phone = phone;
      this.membType = membType;
   }
   getMembCost() {
      if (this.membType === 'Standard') {
         return 250;
      } else if (this.membType === 'Premiere' ){
         return 500;
      } else {
         alert('You need to sign up, bub!');
      }
   }
}

const cust1 = new Customer('Jack', 'Flash', '210-555-1234', 'Standard');

console.log(cust1.getMembCost());