const numbers = [1, 2, 3, 0, 4, -4, 4, -5, 6, 7, 8];

let positive = [];
for (const number of numbers) {
  if (number < 1) {
    break;
  } else {
    positive.push(number);
  }
}
console.log(positive);
