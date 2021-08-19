/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  arr= nums.sort()
  let middle = parseInt(arr.length/2)
  if(arr.length%2 != 0) {
    for(var i=1;i<arr.length-1;i++) {
      let temp = arr[middle+1]
      let a = arr.splice(0,1)[0]
      arr[middle+1] =  a
      arr[middle+2]=temp
    }
  } else {
    for(var i=0;i<arr.length-1;i++) {
      let temp = arr[middle]
      arr[middle] = arr[i+1]
      arr[i+1] = temp
    }
  }
  return arr
};

console.log(wiggleSort([1,1,2,1,2,2,1]))