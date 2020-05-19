import * as faker from "faker";

export interface Product {
  name: string;
  color: string;
  price: number;
  numberInStock: number;
  isInStock: boolean;
}

const productsInStock: Product[] = [];
const productsOutOfStock: Array<Product> = []; //array notation using genericss

for (let i = 0; i < 10; i++) {
  const product = {
    name: faker.commerce.productName(),
    color: faker.commerce.color(),
    price: parseFloat((Math.random() * 900 + 100).toFixed(2)),
    numberInStock: Math.floor(Math.random() * 5),
    isInStock: false,
  };

  product.isInStock = product.numberInStock > 0;

  if (product.isInStock) {
    productsInStock.push(product);
  } else {
    productsOutOfStock.push(product);
  }

}

console.log("In Stock:", productsInStock);
console.log("Out of Stock:", productsOutOfStock);
