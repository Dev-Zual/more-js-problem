const cart = [
  { name: "shirt", price: 300, quantity: 2 },
  { name: "pant", price: 500, quantity: 4 },
  { name: "shoe", price: 1300, quantity: 3 },
  { name: "belt", price: 700, quantity: 1 },
];

function totalCost(products) {
  let sum = 0;
  for (const product of products) {
    const productTotal = product.price * product.quantity;
    sum += productTotal;
  }
  return sum;
}

const expense = totalCost(cart);
console.log(expense);
