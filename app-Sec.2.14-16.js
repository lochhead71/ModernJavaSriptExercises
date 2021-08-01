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

const id = 99;

if(id == 100){
   console.log('Success!');
} else {
   console.log('Nah, brah!');
}

// Not Equal TO

if(id != 100){
   console.log('Success!');
} else {
   console.log('Nah, brah!');
}