//String Methods and Concatenation (sec2.11)
const firstName = 'Rusty';
const lastName = 'Speedracer'
const Character = 'Shlocky'
const str = 'Hello there my name is Rusty'
const tags = 'Breakfast,Lunch,Dinner,Afternoon Snack'

let val;

val = firstName+lastName;

//Concatenation
val = firstName + ' ' + lastName;
//Append
val = 'Jim ';
val += 'Lochhead';
val = 'Howdy! My name is ' + firstName + ' and I am totally ' + Character + '!';

//Escaping
val = 'That\'s awesome, I can\'t wait!';

//Length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// indexOf()
val = firstName.indexOf('y');

// charAt()
val = firstName.charAt(3);
val = firstName[3]; //equivelant

// get last character
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0,3);

//slice
val = firstName.slice(0,3);
val = firstName.slice(-3);

//split
val = str.split(' ');
val = tags.split(',');

//replace
val = str.replace('Rusty', 'Jim');

//includes
val = str.includes('Rusty');

console.log(val);

//template literals / strings (sec2.12)

const age = 50;
const job = 'Product Manager';
const city = 'San Antonio';
let html;

// without template strings (es5)
html = '<ul><li>Name: ' + firstName + ' </li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

// WITH template strings (es6)

function hello(){
    return 'hello';
}
html = `
    <ul>
        <li>Name: ${firstName}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 49 ? 'Nifty Fifty' : 'Young \'un'}</li>
    </ul>
`;

document.body.innerHTML = html;


// Arrays & Array Methods (Sec 2.13)

const numbers = [1,2,3,5,8,13]; 
const numbers2 = new Array(5,10,15,20,25);
const fruit = ['kiwi', 'star fruit', 'dragon fruit', 'passion fruit', 'tomato'];
const mixedArray = [25, 'string', true, undefined, null, {a:1, b:2}, new Date()];

let val13;

// get array length
val13 = numbers.length;

// check if is array
val13 = Array.isArray(numbers);

//get single value (first position of arrays and strings is '0')
val13 = numbers[3];

//Insert into array (will replace value of that postion)
numbers[1] = 1;

// Find Index of value
val13 = numbers.indexOf(8);

// MUTATING ARRAYS

// add on to end of array
numbers.push(21);
let lastPosition = numbers[numbers.length -1];
let secondLast = numbers[numbers.length -2];

numbers.push(lastPosition + secondLast);

/* add on to beginning of array
numbers.unshift(0);

//take off from end
numbers.pop();

//take off from front
numbers.shift();

//splice values (extracting a range)
numbers.splice(2,4);

//Reverse the Array
numbers.reverse();

//CONCATENATING ARRAYS
val13 = numbers.concat(numbers2);

//sort arrays
val13 = fruit.sort();*/

//using the compare function
val13 = numbers.sort(function(x, y){
    return x - y;
});

// reverse sort
val13 = numbers.sort(function(x, y){
    return y - x;
});

// Find a value
function under13 (num){
    return num < 13;
};

val13 = numbers.find(under13);

//console.log(numbers);
console.log(val13);