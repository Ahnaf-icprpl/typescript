/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
];

function analyzeSales(data: number[]) {
  let total = 0;
  let highest = data[0];
  let lowest = data[0];
  let over300k = 0;

  for (let i = 0; i < data.length; i++) {
    total += data[i];
    if (data[i] > highest) {
      highest = data[i];
    }
    if (data[i] < lowest) {
      lowest = data[i];
    }
    if (data[i] >= 300000) {
      over300k++;
    }
  }

  let avg = total / data.length;

  console.log("Total revenue:", total);
  console.log("Highest transaction:", highest);
  console.log("Lowest transaction:", lowest);
  console.log("Transactions >= 300k:", over300k);
  console.log("Average transaction:", avg);
}

analyzeSales(sales);