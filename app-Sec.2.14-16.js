/*
2.14 OBJECT LITERALS
*/

let val

const person = {
   firstName: 'Rusty',
   lastName: 'Speedracer',
   age: 50,
   email: 'rsr@gmail.com',
   hobbies: ['running', 'gardening', 'kicking ass'],
   address: {
      city: 'San Antonio',
      street: 'Blakeley',
      Zip: '78209'
   },
   BirthYear: function(){
      return year - this.age
   }
};

/*
2.15 DATE OBJECT
*/

const today = new Date();
let year = today.getFullYear();
const birthday = new Date('02-01-1973');

val = person;
// Get Specific Value
val = person.hobbies[1];
val = person.address.street;
val = person.BirthYear();

val = birthday;
val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getHours();
val = today.getMinutes();

birthday.setMonth(6);
// get & set for all the subcomponents

//console.log(birthday);

/*
2.16 IF STATEMENTS & COMPARISON OPERATORS

if(something){
   do something
} else {
   do something else
}*/

const id = '100';

/* if(id == 100){
   console.log('Success!');
} else {
   console.log('Nah, brah!');
}

// Not Equal to

if(id != 100){
   console.log('Success!');
} else {
   console.log('Nah, brah!');
}

// Equal to value and type

if(id === 100){
   console.log('Success!');
} else {
   console.log('Nah, brah!');
} */

// Test for undefined const

// if (typeof id !== 'undefined'){
//    console.log(`The ID is ${id}`);
// } else {
//    console.log('NO ID')
// }

// greater than or less than

// if (id >= 100){
//    console.log(`Cha Ching!`);
// } else {
//    console.log('Busted, Bruh!')
// }

const bestColor = 'green';

// if(bestColor === 'blue'){
//    console.log('Go Blue!')
// } else if(bestColor === 'maize'){
//    console.log('Maize Rage!')
// } else {
//    console.log('Sparty Sux!')
// }

// Logical operators

const firstName = 'Jim';
const age = '50';

if(age < 50 && firstName === 'Steve'){
   console.log(`Fifty is Nifty... sucks to be you ${firstName}.`)
} else {
   console.log('Steve\'s the BESTEST!')
}

if(age < 50 || firstName != 'Steve'){
   console.log(`Fifty is Nifty... sucks to be you ${firstName}.`)
} else {
   console.log('Steve\'s the BESTEST!')
}

// TERNARY OPERATOR

console.log(age == 50 ? 'Correct' : 'Incorrect');