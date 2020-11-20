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
          resolve(JSON.parse(result));
        }
        catch (e) {
          reject(console.log('Deu ruim bagual!\n'));
        };
      });
    });
  })
};

const getStudents = async () => {
  const firstClass = await getClass('A');
  const secondClass = await getClass('B');
  const thirdClass = await getClass('C');
  return [].concat(firstClass, secondClass, thirdClass);
}

getStudents()
  .then(students => students.map(students => students.nome))
  .then(log => console.log(log));

