const http = require('http');

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = '';

            res.on('data', data => {
                result += data;
            });

            res.on('end', end => {
                try {
                    resolve (JSON.parse(result));
                }
                catch(e) {
                    reject(console.log('Deu ruim bagual!\n'));
                };
            });
        });
    })
};

// Promise.all() recieve n promises, and when they're resolved, it executes;
Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(classes => [].concat(...classes))
    .then(students => students.map(students => students.nome))
    .then(names => console.log(names));