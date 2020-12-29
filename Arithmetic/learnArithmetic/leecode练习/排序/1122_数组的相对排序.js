/**
 * 给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/relative-sort-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let arr = []
  let other = []
  for(var i=0;i<arr2.length;i++){
    for(var j=0;j<arr1.length;j++) {
      if(arr1[j] === arr2[i]) {
        arr.push(arr1[j])
      }
    }
  }
  for(var i=0;i<arr1.length;i++) {
    let push = true
    for(var j=0;j<arr2.length;j++) {
      if(arr1[i] === arr2[j]) {
        push = false
        break;
      }
    }
    if(push) {
      other.push(arr1[i])
    }
  }
  other.sort((a,b)=>a-b)
  return arr.concat(other)
}

console.log(relativeSortArray([28,6,22,8,44,17],[22,28,8,6]))