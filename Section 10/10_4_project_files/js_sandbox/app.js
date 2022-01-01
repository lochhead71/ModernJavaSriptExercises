// Destructuring Assignment
let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500, 600];
// console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(rest);

// Array Destructuring
// const gratefulDead = [
// 	'Jerry',
// 	'Bobby',
// 	'Phil',
// 	'Mickey',
// 	'Billy',
// 	'Keith',
// 	'Donna',
// ];

// const [
// 	leadGuitarist,
// 	rhythmGuitarist,
// 	bassGuitarist,
// 	drummer1,
// 	drummer2,
// 	keyboardist,
// 	backupSinger,
// ] = gratefulDead;

// console.log(
// 	leadGuitarist,
// 	rhythmGuitarist,
// 	bassGuitarist,
// 	drummer1,
// 	drummer2,
// 	keyboardist,
// 	backupSinger
// );

// Parse array returned from function
// function deadSet() {
// 	return ['Jerry', 'Bobby', 'Phil', 'Mickey', 'Billy', 'Keith', 'Donna'];
// }
// let leadGuitarist,
// 	rhythmGuitarist,
// 	bassGuitarist,
// 	drummer1,
// 	drummer2,
// 	keyboardist,
// 	backupSinger;
// [
// 	leadGuitarist,
// 	rhythmGuitarist,
// 	bassGuitarist,
// 	drummer1,
// 	drummer2,
// 	keyboardist,
// 	backupSinger,
// ] = deadSet();
// console.log(drummer1);

// Object Destructuring
const person = {
	name: 'Jerry Garcia',
	instrument: 'guitar',
	handle: 'fatman',
	alive: false,
};
// old ES5 method
// const name = person.name,
// 	instrument = person.age,
// 	handle = person.age,
// 	alive = false;

// new ES6 destructuring
const { name, instrument, handle, alive } = person;

console.log(name, instrument, handle, alive);
