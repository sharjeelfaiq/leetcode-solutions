/**
 * Two Sum (Easy)
 *
 * Pattern: Array, Hash Map
 * Source: https://leetcode.com/problems/two-sum/
 *
 * Time: O(n)
 * Space: O(n)
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

const output = twoSum([2, 5, 11, 15, 7], 9);
console.log(output);
