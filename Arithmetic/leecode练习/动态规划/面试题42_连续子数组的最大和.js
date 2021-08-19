/**输入一个整型数组，数组里有正数也有负数。
 * 数组中的一个或连续多个整数组成一个子数组。
 * 求所有子数组的和的最大值
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var dp = []
  dp[0] = nums[0]
  let max = dp[0]
  for(var i=1;i<nums.length;i++) {
    dp[i] = Math.max(nums[i]+dp[i-1],nums[i])
    if(dp[i] > max) {
      max = dp[i]
    }
  }
  return max
};
console.log(maxSubArray([1,1]))