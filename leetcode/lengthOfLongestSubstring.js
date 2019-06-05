// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function(s) {
  var sum = '';
  var max = 0;
  var i = 0;
  var k = i;
  while (i < s.length && k <s.length) {
    if (sum.indexOf(s[k]) === -1) {
      sum += s[k];
      k++;
    } else {
      i++
      k = i;
      sum = '';
    }
    max = Math.max(max, sum.length);
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));