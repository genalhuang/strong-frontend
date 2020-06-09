/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let arr = strs.sort((a,b)=>a.length-b.length)
  if(!strs.length) {
    return ''
  }
  let str = arr[0]  
  for(var i=0;i<=str.length;i++) {
    for(var j=str.length;j>i;j--) {
      let a = str.slice(i,j)
      if(judge(a)){
        if(str === a && strs.length>2) {
          return ''
        }
        return a
      }
    }
  }
  function judge(str) {
    let flag = true;
    for(var i=0;i<strs.length;i++) {
      if(strs[i].indexOf(str)===-1) {
        flag = false;
      }
    }
    return flag
  }
  return ''
};

console.log(longestCommonPrefix(["dog","racecar","car"]))