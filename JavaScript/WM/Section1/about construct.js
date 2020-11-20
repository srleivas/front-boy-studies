// Basically, we associate this constructor to a const named ferrari or whatever
// it then inherit the abilty to call any of this functions inside, like ferrari.accelerate;

function carAccelerate(maxSpeed, acceleration) {
	console.log('Max Speed:', maxSpeed, 'km/h', '\nAcceleration:', acceleration, 'km/h');
	console.log('\nVrrrruuuum...\n');
	let currentSpeed = 0;

	// public function using "this";
	this.accelerate = function() {
		if (currentSpeed + acceleration <= maxSpeed) {
			currentSpeed += acceleration;
		} else {
			currentSpeed = maxSpeed;
			console.log('Full speeeeeeed\nGotta go faaaast booooyyyy' + '\nCurrent Speed:', currentSpeed, 'km/h');
		}
	}
	//  Another public function using "this";
	this.getCurrentSpeed = function() {
		return currentSpeed;
	}
}

const ferrari = new carAccelerate(300, 20);
ferrari.accelerate();
console.log(ferrari.getCurrentSpeed());
