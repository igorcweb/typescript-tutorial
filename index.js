import * as faker from "faker";
const products = [];
for (let i = 0; i < 15; i++) {
  const product = {
    name: faker.commerce.productName(),
    color: faker.commerce.color(),
    price: parseFloat((Math.random() * 900 + 100).toFixed(2)),
    numberInStock: Math.floor(Math.random() * 5)
  };
  product.isInStock = product.numberInStock > 0;

  products.push(product);
}
console.log(products);
