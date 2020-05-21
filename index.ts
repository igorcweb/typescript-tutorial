import * as faker from "faker";

interface Product {
  name: string;
  color: string;
  price: number;
  numberInStock: number;
  isInStock: boolean;
}

const productsInStock: Product[] = [];
const productsOutOfStock: Array<Product> = []; //array notation using generics

function productIsInStock(product: Product): boolean {
  return product.isInStock;
}

for (let i = 0; i < 10; i++) {
  const product = {
    name: faker.commerce.productName(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price()) + .99,
    numberInStock: Math.floor(Math.random() * 5),
    isInStock: false,
  };

  product.isInStock = product.numberInStock > 0;

  if (productIsInStock(product)) {
    productsInStock.push(product);
  } else {
    productsOutOfStock.push(product);
  }



}

console.log("In Stock:", productsInStock);
console.log("Out of Stock:", productsOutOfStock);
