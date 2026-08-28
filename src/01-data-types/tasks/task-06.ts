/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
  productCode: string;
  productName: string;
  price: number;
  stock: number;
  weight: number;
  rating: number;
  isDiscounted: boolean;
};

const product1: Product = {
  productCode: "PRD001",
  productName: "Laptop",
  price: 15000000,
  stock: 10,
  weight: 1.5,
  rating: 4.8,
  isDiscounted: true,
};

const product2: Product = {
  productCode: "PRD002",
  productName: "Mouse",
  price: 150000,
  stock: 50,
  weight: 0.2,
  rating: 4.5,
  isDiscounted: false,
};

const product3: Product = {
  productCode: "PRD003",
  productName: "Keyboard",
  price: 500000,
  stock: 25,
  weight: 0.8,
  rating: 4.7,
  isDiscounted: true,
};

console.log(product1);
console.log(product2);
console.log(product3);