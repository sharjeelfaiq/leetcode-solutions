/**
 * Running Sum of 1D Array (Easy)
 *
 * Pattern: Array, Prefix Sum
 * Source: https://leetcode.com/problems/running-sum-of-1d-array/
 *
 * Time: O(n)
 * Space: O(1)
 */

function runningSum(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  return nums;
}

const output = runningSum([1, 2, 3, 4]);
console.log(output);
