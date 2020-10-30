const myObject = {
    name: 'Xxx-xxX',
    type: 'X',
    color: 'yellow'
}

console.log(Object.keys(myObject));
console.log(Object.values(myObject));
console.table(Object.entries(myObject));

Object.entries(myObject).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})

Object.defineProperty(myObject, 'year', {
    enumerable: false,
    writable: false,
    value: 2019
})

myObject.year = 2000;

console.log('\nIt was not overwritten >', myObject.year);
// Enumerate 
console.log('\nIt was not enumerated:'); 
console.table(Object.entries(myObject) ); 

// Assign, takes as argument the object of destiny and objects which the contents gonna be assigned to the
// target object. When there's repeated elements, the earlier will be overwritten;
const targetObject = {a: 1}
const obj1 = {b: 2}
const obj2 = {c: 2, a: 4}

console.log('Initial Object:', targetObject);
Object.assign(targetObject, obj1, obj2);
console.log('Assigned Object:', targetObject);