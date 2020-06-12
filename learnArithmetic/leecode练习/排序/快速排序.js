/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (arr) {
  if(!arr.length) {
    return []
  }
  let left  = []
  let right = []
  let middle = Math.floor(arr.length/2)
  for(let i = 0;i<arr.length;i++) {
    if(i != middle) {
      if(arr[i] > arr[middle]) {
        right.push(arr[i])
      } else {
        left.push(arr[i])
      }
    }
  }
  return sortArrayByParityII(left).concat(arr[middle],sortArrayByParityII(right))
};

console.log(sortArrayByParityII([4, 2, 5, 7]))