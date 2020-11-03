const newArray = [23, 5, 9, 12]
const reduceArray = newArray.reduce((total, currentV) => {
  console.log(`Total: ${total}, CurrentV: ${currentV}`);
  return total = `${total + currentV}`;
});

console.log(`You got Stringed!\n'${reduceArray}'`);