const prices = [250000, 180000, 95000, 420000, 125000];

function calculateTotalPrice(prices: number[]): number {
  let total = 0;
  for (const price of prices) {
    total += price;
  }
  return total;
}

console.log("Total price:", calculateTotalPrice(prices));
