// preventExtensions can be change, but not extended/added
const changes = Object.preventExtensions({
    name: 'name', type: 'type', date: 'date'
})
console.log('Extensible:', Object.isExtensible(changes));

changes.name = 'nameChange';
changes.type = 'typeChange';
delete changes.date;
console.log(changes, '\n');

// Seal, can be changed but not removed or deleted;
const sealedObject = Object.seal({
    type: 'type', year: 'year', valid: true
})
console.log('Is sealed:', Object.isSealed(sealedObject))

sealedObject.type = 'typeChange'; 
delete sealedObject.year;
sealedObject.id = '6625625';
console.log(sealedObject);

// Freezed Objects can't be changed, added nor deleted
Object.freeze;