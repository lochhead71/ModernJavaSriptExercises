// // FACTORY METHODS
function MemberFactory() {
	this.createMember = function (name, type) {
		let member;
		if (type === 'simple') {
			member = new SimpleMembership(name);
		} else if (type === 'standard') {
			member = new StandardMembership(name);
		} else if (type === 'super') {
			member = new SuperMembership(name);
		}
		member.type = type;

		member.define = function () {
			console.log(`${this.name} (${this.type}): ${this.cost}`);
		};
		return member;
	};
}

const SimpleMembership = function (name) {
	this.name = name;
	this.cost = 'Free';
};
const StandardMembership = function (name) {
	this.name = name;
	this.cost = '$15.00/mo';
};
const SuperMembership = function (name) {
	this.name = name;
	this.cost = '50.00/mo';
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Jerry Garcia', 'standard'));
members.push(factory.createMember('Bobby Wier', 'standard'));
members.push(factory.createMember('Phil Lesh', 'super'));
members.push(factory.createMember('Mickey Hart', 'standard'));
members.push(factory.createMember('Billy Kreutzmann', 'standard'));
members.push(factory.createMember('Keith Godchaux', 'simple'));
members.push(factory.createMember('Donna Jean Godchaux', 'simple'));

// console.log(members);

members.forEach(function (member) {
	member.define();
});
