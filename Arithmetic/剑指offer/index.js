
/**
 * 最长回文子串
 */

// 傻逼暴力破解
var longestPalindrome = function (s) {
  if (!s.length) {
    return 0;
  }
  let max = s[0];
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < i; j++) {
      let str = s.slice(j, i + 1)
      if (judgeIsPalindrome(str)) {
        if (str.length > max.length) {
          max = str
        }
      }
    }
  }
  return max;

  function judgeIsPalindrome(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--
    }
    return true;
  }
};


let res = longestPalindrome('babad')
console.log(res)