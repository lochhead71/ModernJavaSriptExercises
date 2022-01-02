const User = function (name) {
	this.name = name;
	this.chatroom = null;
};

User.prototype = {
	send: function (msg, to) {
		this.chatroom.send(msg, this, to);
	},
	recieve: function (msg, from) {
		console.log(`${from.name} to ${this.name}: ${msg}`);
	},
};

const Chatroom = function () {
	let users = {}; // list of users

	return {
		register: function (user) {
			users[user.name] = user;
			user.chatroom = this;
		},
		send: function (msg, from, to) {
			if (to) {
				// DM
				to.recieve(msg, from);
			} else {
				// Board Post
				for (key in users) {
					if (users[key] !== from) {
						users[key].recieve(msg, from);
					}
				}
			}
		},
	};
};

const jerry = new User('Jerry');
const bobby = new User('Bobby');
const phil = new User('Phil');
const mickey = new User('Mickey');
const billy = new User('Billy');

const chatroom = new Chatroom();

chatroom.register(jerry);
chatroom.register(bobby);
chatroom.register(phil);
chatroom.register(mickey);
chatroom.register(billy);

jerry.send('Shall we go?', bobby);
bobby.send('You and I?', jerry);
phil.send('While we can...');
