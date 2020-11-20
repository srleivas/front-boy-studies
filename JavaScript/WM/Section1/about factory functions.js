// Factory functions returns an object
newPerson = function() {
	return {
		name: 'name',
		age: 18,
		birth: 'July 2002'
	}
}

const personX = newPerson();
// console.log(personX);

// Factory with arguments
newProduct = function(name, price, off = 0.1){
    return{
        name,
        price,
        off
    }
}

const product1 = newProduct("Feijão", 4.75);
console.log(product1);
