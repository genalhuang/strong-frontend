/**编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if(strs.length <= 1) {
    return strs.length === 0 ? "":strs[0]
  }
  strs = strs.sort((a, b) => a.length - b.length)
  let common = strs[0]
  let m = 0
  let max = 0
  let index = 0
  let tag = false
  for (let i = 0; i < common.length; i++) {
    if (digui(common[i])) {
      m++
      max = m>max?m:max;
      if(index === 0 && tag) {
        index = i
      }
    } else {
      m = 0
      index = 0
      tag = true
    }
  }
  function digui(common) {
    let flag = true
    for (var i = 1; i < strs.length; i++) {
      if (strs[i].indexOf(common) === -1) {
        flag = false
      }
    }
    return flag
  }
  console.log(index,max)
  return common.slice(index,max)
};

console.log(longestCommonPrefix(['aa','ab']))