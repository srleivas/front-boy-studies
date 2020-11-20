function narcissist(input) {
  const numbers = Array.from(`${input}`);
  const numbersLen = numbers.length;
  let total = 0;

  for (let digit of numbers) {
    ndigit = parseInt(digit, 10)
    total = total + (ndigit ** numbersLen);
  }

  if (total == input) return true;
  else return false;
}