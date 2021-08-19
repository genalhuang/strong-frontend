/**
 * 和为s的数字
 */
 var twoSum = function (arr, s) {
  for (var i = arr.length - 1; i >= 0; --i) {
    if (arr[i] > s) {
      continue;
    }
    for (var j = 0; j < i; j++) {
      if (arr[j] + arr[i] === s) {
        return [arr[j], arr[i]]
      }
    }
  }
};

// 标准做法 双指针
// 最大的加最小的都比target大，所以最大的数舍弃；最小的加最大的都比target小，所以最小的舍弃
// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/solution/mian-shi-ti-57-he-wei-s-de-liang-ge-shu-zi-shuang-/
var twoSum = function (nums, target) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    if (nums[l] + nums[r] === target) {
      return [nums[l], nums[r]];
    }
    else if (nums[l] + nums[r] > target) {
      r--;
    }
    else { 
      l++ 
    };
  }
};

let res = twoSum([1, 2, 3, 4, 5, 6, 7, 8], 4)
console.log(res)