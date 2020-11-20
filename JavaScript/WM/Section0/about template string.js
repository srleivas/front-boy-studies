// Compact concatenate with template
const a = "pri";
const b = "nt";
const myvar = `Text to be ${a + b}`;

console.log(myvar);

// Shorter functions (can be written wot brackets, like | f = (x) => "text" + x | )

functionname = (parameter, parameters) =>{
    result = parameter + parameters;
    return result;
}

console.log(functionname("abc", "def"));