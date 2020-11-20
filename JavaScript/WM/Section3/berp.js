function functionToCall(validation) { 
  return new Promise ((resolve, reject) => {
    validation ? resolve('\nvalidation true!') : reject('validation false');
  });
}

callingAsync()

async function callingAsync() {
  const promiseResult = await functionToCall(true);
  console.log(promiseResult);
}