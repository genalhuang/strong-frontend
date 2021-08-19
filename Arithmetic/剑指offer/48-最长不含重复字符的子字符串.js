/**
 * 最长不含重复字符的子字符串
 * dp[i] = dp[i-1]是否包含arr[i] ? 包含则dp[i] = 从上一个arr[i]到arr[i]的距离 : 否则dp[i] = dp[i-1] + 1;
 * dp[i]表示以第i个字符为结尾的不包含重复字符串的最长长度
 */
 function getSingleStr(str) {
  if (!str) {
    return 0
  }
  let strArr = str.split('')
  let dp = [1]
  for (var i = 1; i < strArr.length; i++) {
    let start = dp[i - 1]
    let dpArr = strArr.slice(i - start, i)
    let lastIndex = dpArr.indexOf(strArr[i])
    if (lastIndex === -1) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i - 1] - lastIndex
    }
  }
  return Math.max(...dp)
}
let res = getSingleStr('arabcacfr')
console.log(res)