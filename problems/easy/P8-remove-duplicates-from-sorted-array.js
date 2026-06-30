/**
 * Remove Duplicates from Sorted Array (Easy)
 *
 * Pattern: Array, Two Pointers
 * Source: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Time: O(n)
 * Space: O(1)
 */

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let insertIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  return insertIndex;
}

const output = removeDuplicates([1, 1, 2]);
console.log(output);
