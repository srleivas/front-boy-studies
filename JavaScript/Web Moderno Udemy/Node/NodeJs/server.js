const database = require('./database');
const express = require('express');
const bodyParser = require('body-parser');
const { deleteProduct } = require('./database');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/products', (req, res, next) => {
    res.send(database.getAllProducts());
});

// ":" represent it's value as a parameter, used on req, for instance;
app.get('/products/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id));
});

app.post('/products', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price 
    });
    res.send(product);
});

app.delete('/products/:id', (req, res, next) => {
    database.deleteProduct(req.params.id);
    res.send(`Product nº ${req.params.id} deleted!`);
});

app.listen(port, () => {
    console.log(`Running at ${port}`);
});
