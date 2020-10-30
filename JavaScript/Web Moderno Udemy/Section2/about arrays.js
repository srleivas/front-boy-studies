// Make an array of numbers;
function makeArrayAlpha(selectLength = 0){
    const myArray = [];
    for (let i = 0; i < selectLength; i++){
        if (i == 26){
            console.log("i'm out of letters, sorry!");
            break;
        }
        else{
            let letter = String.fromCharCode(65 + i)
            myArray.push(letter);
        }
    }
    return myArray;
}

let myArray = [];
myArray = makeArrayAlpha(26)

// console.table does not show undefined!
// Using sort to sort by Alphabet, currently i don't know how to sort by anything else; 
let i = 0;
let n = 0;
myArray.forEach(function(){
    delete myArray[i + n];
    i++;
    n += 1;
});


console.log('\nmyArray Deleted:'); console.table(myArray);
myArray.sort();

// Splice takes 3 args, first is where to start inside the array, like index 0, second is
// how much elements to remove, ex: 2, third is, optionally, which elements to add, like:   
// (arg1, arg2, elementToAdd, elementToAdd);

myArray.splice(0, 2, 'item1');
console.log('\nmyArray Spliced:'); console.table(myArray);

// Concatenation, just select the things you want to concatenate;
let newArray = ['name1', 'name2', 'name3']; 
newArray = newArray.concat('string', true, newArray);
console.log(newArray);