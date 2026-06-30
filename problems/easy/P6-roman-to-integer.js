/**
 * Roman to Integer (Easy)
 *
 * Pattern: Hash Table, String
 * Source: https://leetcode.com/problems/roman-to-integer/
 *
 * Time: O(n)
 * Space: O(1)
 */

function romanToInt(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let previous = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const current = values[s[i]];

    if (current < previous) {
      total -= current;
    } else {
      total += current;
    }

    previous = current;
  }

  return total;
}

const output = romanToInt("MCMXCIV");
console.log(output);
