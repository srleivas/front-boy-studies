const create = require('/Create.js');

const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('hi, name please: ', input => {
    console.log(input);
})
// if (createFileArg === '-cf'){
//     fs.existsSync(__dirname + '/' + fileNameArg) ? console.log("File already exists...") : writeFileJson(fileNameArg,
//     docType);
// }

// //Functions 
// function writeFileJson(file = 'dummy', docType = 'js'){
//     fs.writeFile(__dirname + '/' + file + '.' + docType, '', err => {
//         console.log(err || 'All good, file created!');
//     })
// }
