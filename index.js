const faker = require("faker");
const fs = require("fs");

const products = [];

for (let i = 0; i < 20; i++) {
  const product = {
    name: faker.commerce.productName(),
    color: faker.commerce.color(),
    price: faker.commerce.price(),
    quantity: Math.floor(Math.random() * 5),
    isInStock: false
  };

  product.isInStock = product.quantity > 0;

  products.push(product);
}

let jsonProducts = JSON.stringify(products);

fs.writeFile("products.json", jsonProducts, err => {
  if (err) {
    console.log(err);
  }
});
