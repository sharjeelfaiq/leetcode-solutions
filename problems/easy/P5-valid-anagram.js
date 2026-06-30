/**
 * Valid Anagram (Easy)
 *
 * Pattern: String, Hash Table
 * Source: https://leetcode.com/problems/valid-anagram/
 *
 * Time: O(n)
 * Space: O(1)
 */

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counts = new Array(26).fill(0);
  const baseCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - baseCode]++;
    counts[t.charCodeAt(i) - baseCode]--;
  }

  for (const count of counts) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

const output = isAnagram("anagram", "nagaram");
console.log(output);
