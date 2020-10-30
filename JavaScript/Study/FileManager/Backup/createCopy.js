const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const possibleArguments = ['-cf']
const createFileArg = process.argv[2];
const fileNameArg = process.argv[3];
const filePath = process.argv[4];

// Treating arguments;
if (createFileArg === '-cf' && fileNameArg !== undefined){
    fs.existsSync(__dirname + '/' + fileNameArg) ? console.log("File already exists...") : 
    writeFileJson(fileNameArg, filePath);
}
else if (process.argv[2] !== possibleArguments){
    console.log(`Valid arguments are: ${possibleArguments}\nYou need at least an Argument and a file name`);
    process.exit(0);
}

function writeFileJson(file = 'dummy', filePath = __dirname + '/CreatedFiles'){
    const completeFilePath = filePath + '/' + file;
    fs.existsSync(filePath) ? console.log('Folder already exists, creating file...') : fs.mkdirSync(filePath);

    // if file exists, ask to rename, else create file 
    if (!fs.existsSync(completeFilePath)){
        fs.writeFile(completeFilePath, '', err => {
            err ? console.log('Deu ruim guri! ' + err) : '';
            readline.close();
        });
    }
    else{
        readline.question('File Already exists, wanna rename it? (Y/N): ', answer => {
            answer = answer.toLowerCase();
            answer.includes('y') ? renameFile(completeFilePath, 'y', file) : 
            renameFile(completeFilePath, 'n', file);
        });
    };
};

function renameFile(filePath, yesNo, fileName){
    if (yesNo === 'y'){
        readline.question('Choose the name of your file with .extension: ', answer => {
            console.log(fileName);
            newPath = filePath.replace(fileName, answer);
            fs.renameSync(filePath, newPath);
            readline.close();
        })
    }
    else{
        readline.close();
    }
}
