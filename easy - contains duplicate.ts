/**
 * @file easy - contains duplicate.ts
 * @description LeetCode solution for Contains Duplicate.
 * @difficulty Easy
 * @pattern Array, Hash Set
 * @source https://leetcode.com/problems/contains-duplicate/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
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
