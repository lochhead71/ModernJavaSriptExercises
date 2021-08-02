 // SWITCHES, BITCHES! 2.17
 
//  const color = 'yellow';

//  switch(color){
//    case 'blue':
//       console.log('Go Blue!');
//    break;
//    case 'green':
//       console.log('Sparty Sucks!');
//    break;
//    case 'red':
//       console.log('Ohio State is the WORST!');
//    break;
//    default:
//       console.log('You must not be in the B1G...');
//  }

//  let day;

//  switch(new Date().getDay()){
//    case 0:
//       day = 'Sunday';
//       break;
//    case 1:
//       day = 'Monday';
//       break;
//    case 2:
//       day = 'Tuesday';
//       break;
//    case 3:
//       day = 'Wednesday';
//       break;
//    case 4:
//       day = 'Thursday';
//       break;
//    case 5:
//       day = 'Friday';
//       break;
//    case 6:
//       day = 'Saturday';
//       break;
//  }

//  console.log(`${day}`);


 // FUNCTION DECLARATIONS & EXPRESSIONS 2.18

//  function greet(firstName = 'Rusty', lastName = 'Speedracer'){
//    //  console.log('Hello');
//    return 'hello ' + firstName + ' ' + lastName;
//  }

// //  console.log(greet());

// const square = function(x){
//    return x*x;
// };

// // console.log(5);

// // Immediately Invokable Function Expressions (IIFEs)

// // (function(){
// //    console.log('IIFEs Rule!');
// // })();

// // (function(newName){
// //    console.log('What\'s happening ' + newName + '?');
// // })();

// // Property Methods

// const todo = {
//    add: function(){
//       console.log('Added an Item');
//    },
//    edit: function(id){
//       console.log(`Edit item ${id}`);
//    }
// }

// todo.delete = function(){
//    console.log('todo deleted.');
// }

// todo.add();
// todo.edit(25);
// todo.delete();

// FOR LOOPS

// for(let i = 0; i < 10; i++){
//    if(i === 5){
//       console.log('The magic number is ' + i)
//    } else {
//    console.log('The number is ' + i);
//    }
// }
// for(let i = 0; i <= 10; i++){
//    if(i === 5){
//       console.log('The magic number is ' + i);
//    continue;
//    }
//    console.log('The number is ' + i);
// }

// for(let i = 0; i <= 10; i++){
//    if(i === 5){
//       console.log('The magic number is ' + i);
//    break;
//    }
//    console.log('The number is ' + i);
// }


// WHILE + DO WHILE LOOPS (Do While will always run once regardless of condition)
// let i = 0;
// while(i < 10){
//    console.log('Number ' + i);
//    i++;
// }

// let i = 100;

// do {
//    console.log('Number ' + i);
//    i++;
// }

// while(i < 10);

//LOOP THROUGH AN ARRAY

const cars = ['sedan', 'hatchback', 'coupe', 'station wagon', 'cross-over'];

// for(i = 0; i < cars.length; i++){
//    console.log(cars[i]);
// }

// cars.forEach(function(car, index, array){
//    console.log(`${index} : ${car}`);
//    console.log(array);
// });

//MAPPING AN ARRAY

// const users = [
//    {id: 1, name: 'Bob'},
//    {id: 2, name: 'Jerry'},
//    {id: 3, name: 'Phil'},
//    {id: 4, name: 'Pigpen'},
//    {id: 5, name: 'Mickey'}
// ];

// const ids = users.map(function(user){
//    return user.id;
// });

// console.log(ids);

//FOR IN LOOP

// const user = {
//    firstName: 'Jerry',
//    lastName: 'Garcia',
//    instrument: 'guitar',
//    status: 'God'
// }

// for(let x in user){
//    console.log(`${x} : ${user[x]}`);
// }

// WINDOW METHODS / OBJECTS / PROPERTIES

// window.console.log('Yep, this is part of the Window object.');

// alert('Hello World.');

// const input = prompt();
// alert(input);

// if (confirm('Are you sure?')){
//    console.log('You betcha!');
// } else {
//    console.log('Coward!');
// }

// let val;

// val = window.outerWidth;
// val = window.innerHeight;
// val = window.scrollY;
// val = window.location;

// // window.location.href = 'http://lochhead.info';
// // window.history.go(-1);

// val = window.navigator;


// console.log(val);
