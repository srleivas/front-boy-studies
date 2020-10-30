// Booleans can be set, aside from true & false, as follows:
let bool_example = 1; //or 0 

// Will output literally 1 or 0, need to be done as second log to be outputed as T or F
console.log("\n", bool_example); 

console.log("\n", !!bool_example);

/* Will return the first true value, if var name's not set, will print 
 * the string after, or anything there is
 */

let name = "Alfredo Augusto";
console.log("\n", name || "Name not handed!\n");
