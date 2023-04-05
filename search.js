const products = [
  { id: 1, name: "xiaomi redmi note 10 lite", price: 17000 },
  { id: 2, name: "mac book pro", price: 117000 },
  { id: 3, name: "asus vivobook x543", price: 37000 },
  { id: 4, name: "lenovo yoga laptop 2023", price: 17000 },
  { id: 5, name: "Dell inspiron laptop", price: 17000 },
  { id: 6, name: "samsung s22 ultra phone", price: 17000 },
  { id: 7, name: "nokia phone 1201", price: 17000 },
  { id: 8, name: "one plus latest phone", price: 17000 },
  { id: 9, name: "apple i watch", price: 17000 },
];

function matchedProducts(products, search) {
  let matchedProducts = [];
  for (const product of products) {
    if (product.name.includes(search)) {
      matchedProducts.push(product);
    }
  }
  return matchedProducts;
}
const result = matchedProducts(products, "phone");
console.log(result);
