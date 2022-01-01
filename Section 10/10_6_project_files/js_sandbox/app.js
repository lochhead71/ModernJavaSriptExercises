// SETS - store unique values of any type
const set1 = new Set();
// Add values to set
set1.add(100);
set1.add('some string');
set1.add({ name: 'Jerry Garcia' });
set1.add(false);
// console.log(set1);

const set2 = new Set([100, 'another string', { key: 'value' }, true]);
// console.log(set2);
// console.log(set2.size);

// Check for values - no objects
// console.log(set1.has('some string'), set2.has(25 * 4));

// Delete from set - no objects
// set1.delete('some string');
// console.log(set1);

// Iterate through sets - for...of or forEach
// for (let item of set1) {
// 	console.log(item);
// }

// set1.forEach((value) => {
// 	console.log(value);
// });

// Convert sets to arrays
const setArr = Array.from(set2);
console.log(setArr);
