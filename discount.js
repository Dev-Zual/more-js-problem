/* 
1. first 100 tickets price ---> 100;
2. second 100 tickets price --> 90;
3. more than 200 tickets price -> 70;
*/

function ticketsPrice(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const restTicketPrice = 70;
  if (quantity <= 100) {
    const price = first100Price * quantity;
    return price;
  } else if (quantity <= 200) {
    const first100Rate = first100Price * 100;
    const restTicket = quantity - 100;
    const restPrice = restTicket * second100Price;
    const price = first100Rate + restPrice;
    return price;
  } else {
    const first100Rate = first100Price * 100;
    const second100Rate = second100Price * 100;
    const restTicket = quantity - 200;
    const restPrice = restTicket * restTicketPrice;
    const price = first100Rate + second100Rate + restPrice;
    return price;
  }
}

const total = ticketsPrice(202);
console.log(total);
