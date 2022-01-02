// MODULE PATTERN - BASIC STRUCTURE (Iffy Function)
// (function () {
// 	// Declare private variables and functions first

// 	return {
// 		// This is where public variables and functions are accessible
// 	};
// })();

// const UIctrl = (function () {
// 	// private variables and functions
// 	let text = 'Hello World';
// 	const changeText = function () {
// 		const element = document.querySelector('h1');
// 		element.textContent = text;
// 	};

// 	return {
// 		// public variables and functions
// 		callChangeText: function () {
// 			changeText();
// 			console.log(text);
// 		},
// 	};
// })();

// UIctrl.callChangeText();

// REVEALING MODULE PATTERN
const itemCtrl = (function () {
	let _data = []; // '_' prefix for private variables
	function add(item) {
		_data.push(item);
		console.log('Item added...');
	}
	function get(id) {
		return _data.find((item) => {
			return item.id === id;
		});
	}

	return {
		add: add,
		get: get,
	};
})();

itemCtrl.add({ id: 1, name: 'John' });
itemCtrl.add({ id: 2, name: 'Mark' });
console.log(itemCtrl.get(2));
