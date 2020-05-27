/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  let middle = Math.floor((left+right)/2)
  while(left <= right) {
    middle = Math.floor((left+right)/2)
    if(nums[middle] > target) {
      right--
    } else if(nums[middle] < target) {
      left++
    } else {
      return middle
    }
  }
  return nums[middle] > target ? middle: middle +1
};

console.log(searchInsert([1,3,5,6], 0))