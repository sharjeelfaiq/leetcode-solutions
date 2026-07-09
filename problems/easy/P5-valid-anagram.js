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
  s = s.toLowerCase();
  t = t.toLowerCase();

  const map = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!map.has(char)) return false;

    map.set(char, map.get(char) - 1);

    if (map.get(char) < 0) return false;
  }

  return true;
}

const output = isAnagram("Earth", "Heart");
console.log(output);
