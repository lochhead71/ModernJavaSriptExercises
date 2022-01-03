// Storage Controller
// Item Controller
const ItemCtrl = (function () {
	// Item Construcor
	const Item = function (id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	};
	// Data Structure / State
	const data = {
		item: [
			{id: 0, name: 'Steak Dinner', calories: 1200},
			{id: 1, name: 'A nice salad', calories: 400},
			{id: 2, name: 'Oatmeal', calories: 250},
		],
		currrentItem: null,
		totalCalories: 0,
	};
	// Public Methods
	return {
		logData: function () {
			return data;
		},
	};
})();

// UI Controller
const UICtrl = (function () {
	// Public Methods
	return {};
})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
	// Public Methods
	return {
		init: function () {
			console.log('Initializing App...');
		},
	};
})(ItemCtrl, UICtrl);

// Initializing App
App.init();
