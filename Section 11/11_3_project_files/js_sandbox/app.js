// SINGLETON PATTERN - you can only return one instance
const Singleton = (function () {
	let instance;

	function createInstance() {
		const object = new Object({ lyric: 'If I knew the way...' });
		return object;
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		},
	};
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);
