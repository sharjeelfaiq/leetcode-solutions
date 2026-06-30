/**
 * Richest Customer Wealth (Easy)
 *
 * Pattern: Array, Matrix
 * Source: https://leetcode.com/problems/richest-customer-wealth/
 *
 * Time: O(m * n)
 * Space: O(1)
 */

function maximumWealth(accounts) {
  let maxWealth = 0;

  for (const customer of accounts) {
    let wealth = 0;

    for (const balance of customer) {
      wealth += balance;
    }

    maxWealth = Math.max(maxWealth, wealth);
  }

  return maxWealth;
}

const output = maximumWealth([
  [1, 2, 3],
  [4, 5, 6],
]);
console.log(output);
