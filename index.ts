import * as faker from "faker";

interface Product {
  name: string;
  color: string;
  price: number;
  numberInStock: number;
  isInStock: boolean;
}

const products: Product[] = [];

for (let i = 0; i < 20; i++) {
  const product = {
    name: faker.commerce.productName(),
    color: faker.commerce.color(),
    price: parseFloat((Math.random() * 900 + 100).toFixed(2)),
    numberInStock: Math.floor(Math.random() * 5),
    isInStock: false
  };

  product.isInStock = product.numberInStock > 0;

  const validateProduct = (product: Product) => {
    return product;
  };

  products.push(validateProduct(validateProduct(product)));
}

console.log(products);
