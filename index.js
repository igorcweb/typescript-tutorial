"use strict";
exports.__esModule = true;
var faker = require("faker");
var productsInStock = [];
var productsOutOfStock = []; //array notation using generics
for (var i = 0; i < 10; i++) {
    var product = {
        name: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: parseFloat((Math.random() * 900 + 100).toFixed(2)),
        numberInStock: Math.floor(Math.random() * 5),
        isInStock: false
    };
    product.isInStock = product.numberInStock > 0;
    if (product.isInStock) {
        productsInStock.push(product);
    }
    else {
        productsOutOfStock.push(product);
    }
}
console.log("In Stock:", productsInStock);
console.log("Out of Stock:", productsOutOfStock);
