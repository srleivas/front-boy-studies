const arrayToFilter = [
    {name: 'laptop' , type: 'eletronic', price: 2900},
    {name: 'smartphone', type: 'eletronic', price: 1400},
    {name: 'earphone', type: 'accessory', price: 120},
    {name: 'headset', type: 'accessory', price: 340}
]

console.log(arrayToFilter.filter(function(array){
    return array.price < 2900;
}))
