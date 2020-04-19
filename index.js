import * as faker from "faker";
const products = [];
// const products: Array<Product> = [];
for (let i = 0; i < 10; i++) {
    const product = {
        name: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: parseFloat((Math.random() * 900 + 100).toFixed(2)),
        numberInStock: Math.floor(Math.random() * 5),
        isInStock: false,
    };
    product.isInStock = product.numberInStock > 0;
    const validateProduct = (product) => {
        return product;
    };
    products.push(validateProduct(product));
}
console.log(products);
