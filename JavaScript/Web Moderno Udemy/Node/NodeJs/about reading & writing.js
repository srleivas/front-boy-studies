const fs = require ('fs');

// Sync reading;
try{
    const syncContent = fs.readFileSync( __dirname + '/archive.json', "utf-8"); 
    const syncContentParsed = JSON.parse(syncContent);
    console.log(`name: ${syncContentParsed.person0.name} \nage: ${syncContentParsed.person0.age} `);
}
catch(e){
    console.log('Noooooooooooo');
}

// Async reading; 
const asyncJoke = fs.readFile(__dirname + '/archive.json', 'utf-8', function(e, asyncContent){
    if (e === null){
        asyncContent = JSON.parse(asyncContent); 
        console.log("but hey, here i work! \nAsync ===>", asyncContent,
        "\nnot with template string though, jokes on ya! Try it...");
    }
    else{
        console.log('Noooooooooooo\n', e);
    }
});
console.log(`\n===> Async read file: ${asyncJoke};\nWell yeah, that's the joke.\n`)
console.clear();

// Sync reading directory;
const readSync = fs.readdirSync(__dirname, 'utf-8');
console.log("Sync, things getting messy here:\n", readSync);

// Async reading directory;
fs.readdir(__dirname, 'utf-8', function(e, content){
    console.log('Async reading directory:\n',content);
});

// Read Section
const objectToWrite = {
    name: 'name0',
    age: 25,
    birth: 1995
};

fs.writeFile(__dirname + '/fileCreated.json', JSON.stringify(objectToWrite), err => { 
    console.log(err || 'File Created!');
});

