/**
 * Longest Substring Without Repeating Characters (Medium)
 *
 * Pattern: Hash Table, Sliding Window, String
 * Source: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Time: O(n)
 * Space: O(n)
 */

function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (lastSeen.has(char) && lastSeen.get(char) >= left) {
      left = lastSeen.get(char) + 1;
    }

    lastSeen.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

const output = lengthOfLongestSubstring("abcabcbb");
console.log(output);
