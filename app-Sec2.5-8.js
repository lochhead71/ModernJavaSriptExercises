//Log to console
console.log('Hello Cleveland');
console.log(12345);
console.log(true);
var greeting = 'Hola, compadre';
console.log(greeting);
console.log([1,2,3,4,5]);
console.log({a:1,b:2});
console.table({a:1,b:2});
console.error('Baby did a bad, bad thing.');
console.clear();
console.warn('Are you sure you wanna do that?');
console.time('Time Check')
    console.log('Hello Cleveland');
    console.log('Hello Detroit');
    console.log('Hello Chicago');
    console.log('Hello Pittsburg');
console.timeEnd('Time Check');

/* 3 Different methods for variables: var, let, const
variables can include these characters: letters, numbers, _, $
Cannot begin with a number, multi-word should be camelCase or snake_case
*/

// //Init Var (good for 'if' statements)
var widget;
console.log(widget);
widget = 'SooperDelucks';
console.log(widget);

//let and const
let dudesName = 'John Doe';
console.log(dudesName);
dudesName = 'Steve Smith';
console.log(dudesName);
const dudesOtherName = 'Travis';
console.log(dudesOtherName);
//can't change value and have to assign a value
// you can assign an object to a const and change the values inside
const person = {
     name: 'Travis Austin',
     age: 49
};
person.name = 'Dudeness';
console.log(typeof person);

//you can assign an array to const and manipulate with methods
const digits = [1,2,3,4,5]
digits.push(6);
console.log(digits);