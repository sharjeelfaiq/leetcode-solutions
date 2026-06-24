/**
 * Build Array from Permutation (Easy)
 *
 * Pattern: Array, Simulation
 * Source: https://leetcode.com/problems/build-array-from-permutation/
 *
 * Time: O(n)
 * Space: O(n)
 */

function buildArray(nums) {
  return nums.map((index) => nums[index]);
}

const output = buildArray([0, 2, 1, 5, 3, 4]);
console.log(output);
