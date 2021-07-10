// I changed a little from the first on but... it did not pass;
// It's not that it doesn't work, but i couldn't figure out the reason why won't be accepted; 
// It works with both arrays and arguments passed directly so...
function sender(...args) {
  const argLen = args.length;
  let i = 0;
  let arg = '';

  for (argument of sender.arguments) {
    if (i < argLen - 1) {
      arg = arg + `${argument} -> `;
      i = i + 1;
    }
    else {
      arg = arg + argument;
    }
  }
  return arg;
}

const result = flip(sender)(['cool', 'array', 'of', 'words', '!']);
console.log(result)

function flip(callback) {
  return function reverseReturn(...args) {
    args.reverse();
    if (Array.isArray(args[0])) {
      return callback(...args[0]);
    }
    else {
      return callback(...args);
    }
  }
}