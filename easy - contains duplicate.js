/**
 * Contains Duplicate
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/contains-duplicate/
 * Pattern: Array, Hash Set
 * Statement:
 *   Given an integer array nums, return true if any value appears at least twice in the array, and false if every element is distinct.
 * Examples:
 *   Input: nums = [1,2,3,1]
 *   Output: true
 *   
 *   Input: nums = [1,2,3,4]
 *   Output: false
 *   
 *   Input: nums = [1,1,1,3,3,4,3,2,4,2]
 *   Output: true
 * Constraints:
 *   Official numeric constraints were not present in the source Markdown.
 * Inferred approach: Hash-set duplicate detection
 * Inferred time complexity: O(n)
 * Inferred space complexity: O(n)
 */

// Original solution preserved below.
/**
 * @param {number[]} nums
 * @return {boolean}
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
