/**
 * 连续子数组的最大和
 * dp[i] 代表以i为结束的最大子数组的和
 * dp[i] = Math.max(dp[i-1] + arr[i], arr[i])
 */

 function getArrMax(nums) {
  let pre = 0
  let maxAns = nums[0];
  nums.forEach((x) => {
      console.log(pre,x)
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
  });
  return maxAns;

}
console.log(getArrMax([-2, 1, -3, 4, -1, 2, 1, -5, 4]))