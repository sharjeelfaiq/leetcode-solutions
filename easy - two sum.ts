/**
 * @file easy - two sum.ts
 * @description LeetCode solution for Two Sum.
 * @difficulty Easy
 * @pattern Array, Hash Map
 * @source https://leetcode.com/problems/two-sum/
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twoSum(nums: number[], target: number): number[] | undefined {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }
}

const output = twoSum([2, 5, 11, 15, 7], 9);
console.log(output);
