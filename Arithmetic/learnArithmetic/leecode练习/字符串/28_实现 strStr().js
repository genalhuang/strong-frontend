/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle === '') {
    return 0
  }
  for(var i = 0;i<=haystack.length-needle.length;i++) {
    str = haystack.slice(i,needle.length+i) 
    if(str === needle) {
      return i
    }
  }
  return -1;
};
console.log(strStr("mississippi","issip"))