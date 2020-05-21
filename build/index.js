"use strict";
exports.__esModule = true;
var faker = require("faker");
var productsInStock = [];
var productsOutOfStock = []; //array notation using generics
function productIsInStock(product) {
    return product.isInStock;
}
for (var i = 0; i < 10; i++) {
    var product = {
        name: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: parseInt(faker.commerce.price()) + .99,
        numberInStock: Math.floor(Math.random() * 5),
        isInStock: false
    };
    product.isInStock = product.numberInStock > 0;
    if (productIsInStock(product)) {
        productsInStock.push(product);
    }
    else {
        productsOutOfStock.push(product);
    }
}
console.log("In Stock:", productsInStock);
console.log("Out of Stock:", productsOutOfStock);
