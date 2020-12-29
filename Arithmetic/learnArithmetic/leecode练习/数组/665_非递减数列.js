/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 没做出来
var checkPossibility = function (nums) {
  let count = 0
  if(nums.length <= 2) {
    return true
  }
  for (let i = 1; i <= nums.length - 2; i++) {
    if(i===0) {
      if ((nums[i] > nums[i + 1])) { 
        count++
      }
    } else {
      console.log(nums[i], nums[i + 1],i)
      if ((nums[i] > nums[i + 1])) {
        if(nums[i] !== nums[i-1]) {
          if(nums[i-1] < nums[i + 1]) {
            count++
          } else {
            return false
          }
        }
      } else if(nums[i-1] > nums[i + 1]) {
        return false
      }
    }
  }
  console.log(count)
  return count <= 1
};
console.log(checkPossibility([4,2,3]))