// underline as name is common practice, not required as you may have guessed;
const _ = require('lodash');

// setInterval(() => console.log(_.random(0, 1)), 500);
let sameLine = 0;
setInterval(() => {
    sameLine = _.random(0, 1);
    process.stdout.write(`${sameLine}`)
},)