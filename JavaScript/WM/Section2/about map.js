Array.prototype.map2 = function(functionToCall){
    const newArray = [];
    for (let i = 0; i < this.length; i++){
        newArray.push(functionToCall(this[i], i, this));
    }
    return newArray;
}

const shopCart = [
    
    '{ "name": "Eraser", "price": 3.45 }',
    '{ "name": "Notebook", "price": 13.90 }',
    '{ "name": "pencil kit", "price": 41.22 }',
    '{ "name": "pencil", "price": 7.50 }'
]

const toObject = json => JSON.parse(json);
const prices = product => product.price;
const result = shopCart.map2(toObject).map2(prices);

console.log(result);