// Will not return 1, because sometimes javascript's cool like a banana
text = 'text'
console.log(text.charAt(5))

/* indexOf, self-explanatory; Can take 2 agrs: the char/string to search and optionally from where, like
 * starting from index 2 onwards
 */
console.log(text.indexOf("x", 2))

// Select from 1 onwards
console.log(text.substring(1))

// Select from 1 until 3, not considering 3 itself
console.log(text.substring(1, 3))

// Concatenate | Put together
console.log("This is my ".concat(text).concat(", allright?"))

// Do i need to comment?
let text2 = "text2"
let vari_chan = text2.replace(2, "%")
console.log(vari_chan)

// Generates an array, separated by given arg
console.log("text0,text1,text2".split(","))