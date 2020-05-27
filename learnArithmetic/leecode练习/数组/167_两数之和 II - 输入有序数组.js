/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 双撞指针
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length-1;
  while(left<right) {
    if(numbers[left]+numbers[right]>target) {
      right--
    } else if(numbers[left]+numbers[right]<target) {
      left++
    } else {
      return [left+1,right+1]
    }
  }
};

console.log(twoSum([2, 7, 11, 15],9))