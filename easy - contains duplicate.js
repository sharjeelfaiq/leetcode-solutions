/**
 * @file easy - contains duplicate.js
 * @description LeetCode solution for Contains Duplicate.
 * @difficulty Easy
 * @pattern Array, Hash Set
 * @source https://leetcode.com/problems/contains-duplicate/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * Determines whether any value appears more than once.
 *
 * @param {number[]} nums - Values to check for duplicates.
 * @returns {boolean} Whether the input contains a duplicate value.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function containsDuplicates(nums) {
  const seen = new Set();

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
