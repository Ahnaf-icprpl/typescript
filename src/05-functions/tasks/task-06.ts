const sales = [125000, 780000, 250000, 99000, 540000, 670000, 180000, 450000, 310000, 820000];

function calculateTotalSales(sales: number[]): number {
  let total = 0;
  for (const sale of sales) {
    total += sale;
  }
  return total;
}

function findHighestTransaction(sales: number[]): number {
  let highest = sales[0];
  for (const sale of sales) {
    if (sale > highest) highest = sale;
  }
  return highest;
}

function findLowestTransaction(sales: number[]): number {
  let lowest = sales[0];
  for (const sale of sales) {
    if (sale < lowest) lowest = sale;
  }
  return lowest;
}

function calculateAverageSale(sales: number[]): number {
  const total = calculateTotalSales(sales);
  return total / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let count = 0;
  for (const sale of sales) {
    if (sale > minimumAmount) count++;
  }
  return count;
}

console.log("Total sales:", calculateTotalSales(sales));
console.log("Highest transaction:", findHighestTransaction(sales));
console.log("Lowest transaction:", findLowestTransaction(sales));
console.log("Average transaction:", calculateAverageSale(sales));
console.log("Transactions above Rp500,000:", countLargeTransactions(sales, 500000));
