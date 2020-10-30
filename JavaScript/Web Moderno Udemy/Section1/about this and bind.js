const person = {
	speak: 'Ohayo!!!',
	speaking() {
		console.log(this.speak);
	}
};
// In this case, "this" is refering to person, resulting the correct functionality;
person.speaking();

// Now i'm attributing the function to a const, which makes "this" act diferently, refering to window or main
// thus causing it to not produce the intended log;
const people = person.speaking;
people();

// In this case, "bind" points to where "this" should look at (weird syntax here), meaning, the referring
// point from where "this" will get it's property will be person (or selected obj or etc);
const right_people = person.speaking.bind(person);
right_people();

// "This" can be stored inside a variable to make it reference what is was referencing at the time that
//  the variable was defined;

using_var = function() {
	this.age = 0;
	const self = this;

	setInterval(
		function() {
			console.log(self.age);
			self.age++;
		} /*.bind(this)*/,
		1000
	);
};

new using_var();
