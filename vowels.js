const vowels = "i am the king of my own kingdom";

function count(vowels) {
  const a = "a";
  const e = "e";
  const i = "i";
  const o = "o";
  const u = "u";
  let cou = 0;
  for (const l of vowels) {
    if (l == a || l == e || l == i || l == o || l == u) {
      cou++;
    }
  }
  return cou;
}

const result = count(vowels);
console.log(result);
