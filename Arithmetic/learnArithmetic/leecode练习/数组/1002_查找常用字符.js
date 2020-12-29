/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (strArr) {
  let sameArr = []
  let nowStr = ''
  let count = 0
  for (let i = 0; i < strArr[0].length; i++) {
    nowStr = strArr[0][i]
    count = 0;
    for (let j = 1; j < strArr.length; j++) {
      if(strArr[j].indexOf(nowStr) !== -1) {
        count++
        strArr[j] = strArr[j].replace(nowStr,'')
      }
    }
    if(count == strArr.length -1) {
      sameArr.push(nowStr)
    }
  }
  return sameArr
};
console.log(commonChars(["cool","lock","cook"]))



/** 判断s1能够通过换位置变成s2
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
  if(s1.length != s2.length) {
    return false
  }
  for (let i = 0; i < s1.length; i++) {
    if(s2.indexOf(s1[i]) !== -1) {
      s2 = s2.replace(s1[i],'')
    }
  }
  if(s2.length > 0) {
    return false
  }
  return true
};









console.log(CheckPermutation("cool","lock"))