const names = [
  "abul",
  "kabul",
  "dabul",
  "cabul",
  "gabul",
  "abul",
  "kabul",
  "gabul",
  "abul",
  "abul",
  "nabul",
  "nabul",
];

function removeDuplicate(names) {
  let unique = [];
  for (const name of names) {
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);
