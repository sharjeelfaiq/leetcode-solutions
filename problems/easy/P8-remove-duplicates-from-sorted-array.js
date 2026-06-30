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

  let write = 1;

  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }

  return write;
}

const output = removeDuplicates([1, 1, 2]);
console.log(output);
