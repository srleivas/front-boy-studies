let x = Number(8.1)

console.log(("Var a is a number ="), Number.isInteger(x), ("\n"))

let Int_for_test = 86
let Floating_point = 1.45213645

let Result = (Floating_point * Int_for_test) / 2

console.log(("Without restraint:"), Result)
console.log("==============================")
console.log(("Restraining:"), Result.toFixed(2))
console.log("==============================")

/*  toString() == transforms to String;
 *  toString(2) == transforms to String represented as binary
 *  2 - The number will show as a binary value
 *  8 - The number will show as an octal value  
 *  16 - The number will show as an hexadecimal value
 */

//Display Ascii value for text | Yeah, no prompt, curse ya :)

var text = "To te falanu po"
var len = text.length

for (let i = 0; i < len; i++)
{
    ascii_value = text.charCodeAt(i);
    console.log("Ascii Value:", ascii_value)
    console.log("Ascii Type:", typeof ascii_value, "\n")
}
