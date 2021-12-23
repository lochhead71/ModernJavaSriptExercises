// async function myFunc() {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('Hello!'), 1000);
// 	});

// 	// const error = true;
// 	const error = false;

// 	if (!error) {
// 		const res = await promise;
// 		return res;
// 	} else {
// 		await Promise.reject(new Error('Something went wrong :-('));
// 	}
// }

// myFunc()
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));

async function getUsers() {
	// await the response of the fetch call
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	//  only proceed once it's resolved
	const data = await response.json();
	// only preceed once the second promise resolved.
	return data;
}

getUsers().then((users) => console.log(users));
