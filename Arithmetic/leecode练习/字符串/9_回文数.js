/**判断一个整数是否是回文数。回文数是指正序（从左向右）
 * 和倒序（从右向左）读都是一样的整数。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0) {
    return false
  }
  let s = x.toString()
  let left = 0;
  let right = s.length-1
  while(left<right) {
    if(s[left] != s[right]) {
      return false
    }
    left++
    right--
  }
  return true
};

console.log(isPalindrome(0))