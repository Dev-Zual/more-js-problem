/* 
 1. chair = 3 cft;
 2. table = 10 cft;
 3. bed = 50 cft;

*/

function woodCalculate(chair, table, bed) {
  const perChair = 3;
  const perTable = 10;
  const perBed = 50;
  const totalChair = chair * perChair;
  const totalTable = table * perTable;
  const totalBed = bed * perBed;
  const totalWood = totalChair + totalTable + totalBed;
  return totalWood;
}

const total = woodCalculate(2, 3, 2);
console.log(total);
