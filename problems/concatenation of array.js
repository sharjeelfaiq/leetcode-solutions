/**
 * Concatenation of Array (Easy)
 *
 * Pattern: Array
 * Source: https://leetcode.com/problems/concatenation-of-array/
 *
 * Time: O(n)
 * Space: O(n)
 */

function getConcatenation(nums) {
  return [...nums, ...nums];
}

const output = getConcatenation([1, 2, 1]);
console.log(output);
