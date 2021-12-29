let re;
re = /hello/;
re = /hello/i; // makes case insensitive
// re = /hello/g; // global search

// console.log(re);
// console.log(re.source);

// exec() - return the result in an array or null
// const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);

// test() - returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello there, Buddy!';
// const result = str.match(re);
// console.log(result);

// search() - returns index of the first match
// const str = 'Hello there, Buddy!';
// const result = str.search(re);
// console.log(result);

// replace() - return new string with some or all matches of a pattern
const str = 'Hello there, Buddy!';
const newStr = str.replace(re, 'Hi');
console.log(newStr);
