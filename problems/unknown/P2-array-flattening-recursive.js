/**
 * Array Flattening (Recursive) (Unknown)
 *
 * Pattern: Array, Recursion
 * Source: Local example
 *
 * Time: O(n)
 * Space: O(n)
 */

function flattenArray(items) {
  const flattened = [];

  for (const item of items) {
    if (Array.isArray(item)) {
      flattened.push(...flattenArray(item));
    } else {
      flattened.push(item);
    }
  }

  return flattened;
}

const output = flattenArray([1, [2, [3, 4], 5], 6]);
console.log(output);
