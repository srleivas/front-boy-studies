function getPrice(taxes = 0, currency = 'R$'){
        {return `${currency} ${this.price * (1 - this.discount) * (1 + taxes)}`} 
    }


// Called by console log, meaning "this" is refering to window or global, thus
// price, discount and etc would be non-existent / NaN;
console.log(getPrice());

const product = {
    name: 'Laptop Xt2084',
    brand: 'Acer',
    price: 2500,
    discount: 0.2,
    getPrice
}

// Now it's being called by product, and "this" refer to the product itself, therefore
// the variables the function gets are provided by the object;
console.log(product.getPrice());

const product2 = {
    price: 1200,
    discount: 0.2, 
    getPrice
}


// Elements that are not needed by the function are ignored;
const arrayApply = [0.6, '$arrayApply:', 'arrayBonus', 1, 554, 445, 5454, 54156]

let discountX = 0.9;
'dolinho:';

// On call, the first argument is the context inside which the function will be executed, after
// the parameter(or not) for the function being called;
console.log(getPrice.call(product2, 0.5, '$Doleta:'))

// Apply is almost the same, difference is that apply needs you to pass the parameter for the function
// inside a array, like so;
console.log(getPrice.apply(product2, [0.6, '$Dolores:']))
// Since apply recieves a array to use as arguments, you can assign an array to a variable and just call it
// (ironically) after the context argument(product2 here) or just do as above and directly input the array;
console.log(getPrice.apply(product2, arrayApply))