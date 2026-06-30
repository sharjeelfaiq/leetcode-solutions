/**
 * Two Sum (Easy)
 *
 * Pattern: Array, Hash Table
 * Source: https://leetcode.com/problems/two-sum/
 *
 * Time: O(n)
 * Space: O(n)
 */

function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

const output = twoSum([2, 7, 11, 15], 9);
console.log(output);
