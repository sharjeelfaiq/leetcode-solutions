/**
 * r to Integer (Easy)
 *
 * Pattern: Hash Table, String
 * Source: https://leetcode.com/problems/r-to-integer/
 *
 * Time: O(n)
 * Space: O(1)
 */

function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]];

    if (next && next > current) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

const output = romanToInt("MCMXCIV");
console.log(output);
