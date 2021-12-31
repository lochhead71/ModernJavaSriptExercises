// Iterator Example
// function nameIterator(names) {
// 	let nextIndex = 0;

// 	return {
// 		next: function () {
// 			return nextIndex < names.length
// 				? { value: names[nextIndex++], done: false }
// 				: { done: true };
// 		},
// 	};
// }
// // Create array of names
// const namesArr = [
// 	'Jerry',
// 	'Bobby',
// 	'Phil',
// 	'Mickey',
// 	'Billy',
// 	'Keith',
// 	'Donna',
// ];
// // Init Iterator and pass in array
// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);

// Generator Example
// function* sayNames() {
// 	yield 'Mickey';
// 	yield 'Billy';
// 	yield 'Phil';
// }
// const RhythmSec = sayNames();
// console.log(RhythmSec.next().value);
// console.log(RhythmSec.next().value);
// console.log(RhythmSec.next().value);

// ID Creator
function* createIds() {
	let index = 0;
	while (true) {
		yield index++;
	}
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
