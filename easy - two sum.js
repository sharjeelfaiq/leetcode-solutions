/**
 * Two Sum
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/two-sum/
 * Pattern: Array, Hash Map
 * Statement:
 *   Given an array nums and an integer target, return the indices of the two numbers whose sum equals target.
 * Examples:
 *   Input: nums = [2,5,11,15,7], target = 9
 *   Output: [0,4]
 *   
 *   Input: nums = [3,2,4], target = 6
 *   Output: [1,2]
 *   
 *   Input: nums = [3,3], target = 6
 *   Output: [0,1]
 * Constraints:
 *   Exactly one valid answer exists.
 *   Do not use the same element twice.
 *   Official numeric constraints were not present in the source Markdown.
 * Inferred approach: Hash-map complement lookup
 * Inferred time complexity: O(n)
 * Inferred space complexity: O(n)
 */

// Original solution preserved below.
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}

const output = twoSum([2, 5, 11, 15, 7], 9);
console.log(output);
