import * as faker from "faker";
import * as fs from "fs";

interface Product {
  name: string;
  color: string;
  price: number;
  numberInStock: number;
  isInStock: boolean;
}

const products: Product[] = [];

for (let i: number = 0; i < 20; i++) {
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

const jsonProducts: string = JSON.stringify(products);

fs.writeFile("products.json", jsonProducts, (err: Error) => {
  if (err) {
    console.log(err);
  }
});
