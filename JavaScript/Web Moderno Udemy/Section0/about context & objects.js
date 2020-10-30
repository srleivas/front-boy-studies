// First declaration of const, which is considered in the outside scope;
const out_of_scope = "Outside Function";

// We're altering the const inside the function, thus it only is considered in that context;
example_function = () =>
{
    const out_of_scope = "Inside Function";
    return out_of_scope;
}

console.log("\nFirst Call:", out_of_scope);
console.log("Second Call:", example_function(), "\n");

// Declaration of object
// Objects are groups of pairs, name/value;
const First_Object = {
    name: "Object",
    type: "Example",
    geometry: "4D",
    made_of: {
        particles: 29839189398,
        element_x: 1,
        luck: "Leprechaum" 
    }
} 

console.log("First Object Console Call:\n", First_Object, "\n");

// Dynamic adding object content;
const Second_Object = {};
//Two sintaxes to dinamically create obj item;
Second_Object.name = "Object2";
Second_Object["type"] = "Basic";

console.log("Second Object Console Call:\n", Second_Object);
