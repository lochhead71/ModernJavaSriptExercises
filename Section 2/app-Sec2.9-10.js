//Casting Object Types

// let val;
// //number to string
// val = String(5);
// val = String(4+4);

// //boolean to string
// val = true;
// val = String(false);

// //Date to string
// val = String(new Date());

// //Array to string
// val = String([1,2,3,4,5]);

// //toString()
// val = (5).toString();

// //String to Number
// val = Number('5');
// val = Number(false);

// val = parseInt('100');
// val = parseFloat('100.38');

// //output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(1));


// //use case for parsing

// const val1 = '5';
// const val2 = 6;
// const sum = Number(val1) + Number(val2);

// console.log(sum);

// Numbers & the Math Object

const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
// Modulus - remainder of num1 divided by num2
val = num1 % num2;
//exponention - num1 to the power of num2
val = num1 ** num2;
val = Math.pow(5,2);

//increment & decrement - up or down one integer
val2 = num1 + 0.5;
val2++;

//Math Object
val2 = Math.PI;
val = Math.round(val2);
val = Math.ceil(val2);
val = Math.floor(val2);
val = Math.random();
//random number between num1 and num2 (smaller one last)
val = Math.floor(Math.random()*num1+num2);

console.log(val);
