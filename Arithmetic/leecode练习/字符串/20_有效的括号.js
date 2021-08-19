/**给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = []
  let zidian = {
     '(' : ')',
     '[' : ']',
     '{' : '}'
  }
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i]==='[' || s[i]==='{') {
      arr.push(s[i])
    } else {
      if(zidian[arr[arr.length-1]] === s[i]) {
        arr.pop()
      } else {
        return false
      }
    }
  }
  return !arr.length
};

console.log(isValid('{[]}'))