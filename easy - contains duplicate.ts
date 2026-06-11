/**
 * Contains Duplicate (Easy)
 *
 * Pattern: Array, Hash Set
 * Source: https://leetcode.com/problems/contains-duplicate/
 *
 * Time: O(n)
 * Space: O(n)
 */

function containsDuplicates(nums: number[]): boolean {
  const seen = new Set<number>();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

const output = containsDuplicates([1, 2, 3, 4]);
console.log(output);
