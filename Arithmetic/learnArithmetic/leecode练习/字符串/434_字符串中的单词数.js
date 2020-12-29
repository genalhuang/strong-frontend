/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let length = 0;
  s=s.trim()
  if(s.length === 1) {
    return 1
  }
  s.split(' ').map(i=>{
    if(i.length > 0) {
      length++
    }
  })
  return length
};

console.log(reverseWords(""))