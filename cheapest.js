const phones = [
  {
    name: "samsung",
    camera: 12,
    storage: "32gb",
    price: 2000,
    color: "silver",
  },
  {
    name: "iphone",
    camera: 12,
    storage: "32gb",
    price: 82000,
    color: "silver",
  },
  {
    name: "xiaomi",
    camera: 12,
    storage: "32gb",
    price: 64000,
    color: "silver",
  },
  {
    name: "walton",
    camera: 12,
    storage: "32gb",
    price: 22000,
    color: "silver",
  },
  {
    name: "oppo",
    camera: 12,
    storage: "32gb",
    price: 20000,
    color: "silver",
  },
  {
    name: "nokia",
    camera: 12,
    storage: "32gb",
    price: 62000,
    color: "silver",
  },
];

function cheapestPhone(phones) {
  let cheap = phones[0];

  for (const phone of phones) {
    if (phone.price < cheap.price) {
      cheap = phone;
    }
  }
  return cheap;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
