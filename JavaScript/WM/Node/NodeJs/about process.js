const getArgv = process.argv.indexOf('-a') !== -1;

if (getArgv){
    process.stdout.write(`isArgv = ${getArgv}`);
    process.exit();
}
else{
    process.stdout.write('Argument is Needed\n');
    process.stdin.on('data', data => {
        const dataParse = data.toString().replace('\n', '');
        process.stdout.write(`isArgv = ${dataParse}\n`);
        process.exit();
    });
}

