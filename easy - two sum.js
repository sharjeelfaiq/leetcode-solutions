/**
 * @file easy - two sum.js
 * @description LeetCode solution for Two Sum.
 * @difficulty Easy
 * @pattern Array, Hash Map
 * @source https://leetcode.com/problems/two-sum/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * Returns the indices of two values whose sum equals the target.
 *
 * @param {number[]} nums - Values to search for a matching pair.
 * @param {number} target - Required sum of the two values.
 * @returns {number[]} Indices of the matching values.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
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
