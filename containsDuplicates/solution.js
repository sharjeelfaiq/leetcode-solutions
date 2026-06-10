/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicates(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

const output = containsDuplicates([1, 2, 3, 4]);
console.log(output);
