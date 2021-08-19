/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let length = nums.length
  var arr = new Array(length).fill(0)
  for(let i=0;i<length;i++) {
    if(++arr[nums[i]]>=2) {
      return nums[i]
    }
  }

};
console.log(findRepeatNumber([0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
