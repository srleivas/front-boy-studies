//Text area below, beware. I mean, way down;
// Declaring functions inside var;
const common_function = function()
{
    console.log("\nClassic, classic... A 'normal' function.");
}

// Declaring functions inside array; Ugly vs Better;
const inside_array1 = [function(){console.log("\nAwful Desing!!! Inside Array type 1.")}, "index1", "index2"];

const inside_array2 = []
inside_array2[0] = function(cool_parameter){
    console.log("\nConfused? That's the spirit! Inside array better designed.");
}

// Store inside object attribute;
const object = {};
object.inside_object = function(){
    console.log("\nFunction Inside Object")
} 

// Function as parameters
const function_1 = function(function_parameter)
{
    if (typeof function_parameter == "function")
        function_to_pass();
    else
        console.log("Not a function, asshole!")

}
const function_to_pass = () => console.log("\nPassa ou repassa maoeh! Function inside function idk anymore") 

// Function Inside function and we end up on a glo-- black hole!
const a_function = function(a, b){
    return function(c){
        console.log("Tudo isso pra isso =", a + b + c + "\nAh não vei...");                             //To zuando, saqui é maneiro
    }
}

// Considering arguments recieved by function;
function using_args(arg1, arg2, arg3)
{
    let argument_0 = arguments[0];
    argument_0 = argument_0.toLowerCase();

    if (argument_0.includes("hi") == true)
    {
        console.log("Hi There!");
    }
    else
    {
        console.log("Noooooooooooo");
    }
}


// Using Default value on variables;

let using_default; 
using_default = using_default || "default value";

function default_value(a, b, c)
{
    a = a || "string 'a'";
    b = b || "string 'b'";
    c = c || "string 'c'";

    console.log("\na:",a,"\nb:", b,"\nc:", c);
}

// Immediately Invoked Function Expressions

(function()
{
    console.log('\nimmediately invoked!');
}())














// ======================= // ==============// Test Area !X // ================ // ======================= // ========

// /*test 1:*/ common_function();
// /*test 2:*/ inside_array1[0]();
// /*test 3:*/ inside_array2[0]();
// /*test 4:*/ object.inside_object;
// /*test 5:*/ function_1(function_to_pass);
// /*test 6:*/ a_function(1, 6)(8);
// /*test 7:*/ using_args("HI");
// /*test 8:*/ console.log(using_default);
// /*test 9:*/ default_value();
