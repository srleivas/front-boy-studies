const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isPrime = rl.question('Type a number: ', function (number) {
  for (let i = 0; i < number; i++)
    if (number % i === 0) { rl.close(); console.log(false) }
  rl.close()
  console.log( number > 1)
});