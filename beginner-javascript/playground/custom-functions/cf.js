function calculateBill(billAmount, taxRate) {
  const total = billAmount * (1 + taxRate);

  return total;
}

const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);

console.log(myTotal, myTotal2);
