// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let hash = {}
  let sArr = s.split('')
  let tArr = t.split('')
  sArr.map(s=>{
    !hash[s] ? hash[s]=1:hash[s]++
  })
  tArr.map(s=>{
    !hash[s] ? hash[s]=1:hash[s]--
  })
  for(var key in hash) {
    console.log(key)
    if(hash[key]!=0) {
      return false;
    } 
  }
  return true
};

console.log(isAnagram('abc','acb'))