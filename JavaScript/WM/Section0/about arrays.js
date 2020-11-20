// It's wrong, but JS will not claim error
var array = [2.1, 2.5, 6.5, 1,6];
console.log(array[5]);

// In JS, arrays can recieve multiple types of values, such as: 
var typesarray = [{id: 3}, false, null, "string", 134, 2.678];
console.log(typesarray, "\n");

//Remove each from array and tells initial content

kill_array = function (array)
{
    let old_array = [];
    array_length = array.length;
    for (let i = 0; i < array_length; i++)
    {
        old_array[i] = typesarray[i];
        console.log("Remanining =", array_length - i);
        delete typesarray[i];
    }
    return [array, old_array];
}


const array_return = kill_array(typesarray);
const array_finished = array_return[0];
const old_array = array_return[1];

console.log("\nArray Initial content:", old_array);
console.log("\nArray final content:", array_finished);