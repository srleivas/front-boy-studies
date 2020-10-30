const fs = require('fs');

function promiseX() {
  return new Promise(resolve => {
    fs.readFile(__dirname + '/document.txt', 'utf-8', function (e, result) {
      resolve(result);
    })
  })
}

promiseX()
  .then(result => result.split('\n'))
  .then(result => result.join(','))
  .then(result => {
    console.log(result);
    fs.writeFileSync(__dirname + '/document2.txt', result);
  })
  .catch(e => console.log(e));