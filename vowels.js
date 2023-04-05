const vowels = "i am the king of my own kingdom";

function count(vowels) {
  const vowel = ["a", "e", "i", "o", "u"];
  let cou = 0;
  for (const l of vowels) {
    if (vowel.includes(l)) {
      cou++;
    }
  }
  return cou;
}

const result = count(vowels);
console.log(result);
