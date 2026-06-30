/**
 * Contains Duplicate (Easy)
 *
 * Pattern: Array, Hash Table
 * Source: https://leetcode.com/problems/contains-duplicate/
 *
 * Time: O(n)
 * Space: O(n)
 */

function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

const output = containsDuplicate([1, 2, 3, 1]);
console.log(output);
