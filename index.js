import * as faker from "faker";
import * as fs from "fs";
const products = [];
for (let i = 0; i < 20; i++) {
  const product = {
    name: faker.commerce.productName(),
    color: faker.commerce.color(),
    price: parseFloat((Math.random() * 900 + 100).toFixed(2)),
    numberInStock: Math.floor(Math.random() * 5),
    isInStock: false
  };
  product.isInStock = product.numberInStock > 0;
  products.push(product);
}
const jsonProducts = JSON.stringify(products);
fs.writeFile("products.json", jsonProducts, err => {
  if (err) {
    console.log(err);
  }
});
