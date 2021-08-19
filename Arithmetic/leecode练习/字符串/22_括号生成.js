
var generateParenthesis = function(n) {
 let left = n
 let right = n
 let arr = []
 function digui(str,left,right) {
   if(str.length === 2*n) {
     arr.push(str)
     return
   }
   if(left > 0) {
     digui(str + '(',left-1,right)
   }
   if(right > left) {
     digui(str + ')',left,right-1)
   }
 }
 digui('(',left-1,right)
 return arr
};
console.log(generateParenthesis(3))