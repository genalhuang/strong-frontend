/**太蠢了
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  for(var i=0;i<s.length;i++) {
    let str = s.slice(i,i+1)
    let add = false
    for(var j=0;j<t.length;j++) {
      if(str === t[j]) {
        t = t.slice(j+1)
        add = true
        break;
      }
    }
    if(!add) {
      return false
    }
  }
  return true
};




// 用栈的思维实现，遍历对比字符串，将子串作为串，
// 匹配到一个字符后，弹出顶部字符，直到栈为空则为true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const sStack = s.split("");
    const tArray = t.split("");

    for (let i = 0; i < tArray.length; i++) {
        if (tArray[i] === sStack[0]) {
            sStack.shift();
        }

        if (sStack.length === 0) {
            return true;
        }
    }
    if (sStack.length === 0) {
        return true;
    }

    return false;
};

console.log(isSubsequence('aaaa', 'bbaaaa'))