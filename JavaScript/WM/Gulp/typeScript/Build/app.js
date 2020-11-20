"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
function exibir(v) {
    console.log(v.nome + " custa " + v.preco + "!");
}
var c = new products_1.Carro;
c.nome = 'Civic';
c.preco = 89499.00;
exibir(c);
