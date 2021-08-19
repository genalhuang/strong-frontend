/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  debugger
  let arr = []
  let sarr = []
  for(var i=0;i<s.length;i++) {
    if(
    s[i] === 'a' 
    || s[i] === 'e' 
    || s[i] === 'i' 
    || s[i] === 'o' 
    || s[i] === 'u'
    || s[i] === 'A' 
    || s[i] === 'E' 
    || s[i] === 'I' 
    || s[i] === 'O' 
    || s[i] === 'U'
    ) {
      arr.push(i)
    }
  }
  if(arr.length > 1) {
    let left = 0
    let right = arr.length-1
    sarr = s.split('')
    while(left < right) {
      let temp = sarr[arr[right]]
      sarr[arr[right]] = sarr[arr[left]]
      sarr[arr[left]] = temp
      left++
      right--
    }
  } else {
    return s
  }
  return sarr.join('')
};

console.log(reverseVowels("A man, a plan, a canal: Panama"))