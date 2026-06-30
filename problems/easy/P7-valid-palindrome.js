/**
 * Valid Palindrome (Easy)
 *
 * Pattern: Two Pointers, String
 * Source: https://leetcode.com/problems/valid-palindrome/
 *
 * Time: O(n)
 * Space: O(1)
 */

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

const output = isPalindrome("A man, a plan, a canal: Panama");
console.log(output);
