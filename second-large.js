const numbers = [21, 20, 45, 44, 55, 11, 54, 65, 63];
function secondLarge(numbers) {
  let large = numbers[0];
  let second = numbers[0];
  for (const num of numbers) {
    if (num > large) {
      second = large;
      large = num;
    } else if (num > second) {
      second = num;
    }
  }
  return second;
}
console.log(secondLarge(numbers));
