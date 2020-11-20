function sender() {
  let i = 0;
  for (argument of sender.arguments) {
    console.log(`argument ${i + 1} = ${argument}`);
    i = i + 1;
  }
}


const arrayToShift = createArguments(29);
flip(sender)(arrayToShift);

function flip(callback) {
  return function reverseReturn(...args) {
    if (Array.isArray(args[0])) {
      args[0].reverse();
      callback(...args[0]);
    }
    else {
      args.reverse();
      callback(...args);
    }
  }
}

// just to create an array of letters so that i can test in a funnier way, not a part of the task;
function createArguments(howMuch) {
  const argumentsArray = [];
  for (let i = 0; i <= howMuch; i++) {
    if (i == 26) {
      break;
    }
    else {
      let letter = String.fromCharCode(65 + i);
      argumentsArray.push(letter);
    }
  }
  return argumentsArray;
}