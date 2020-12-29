/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let left = 0;
  let right = 0;
  let arr = []
  while (left < m && right < n) {
    if (nums1[left] < nums2[right]) {
      if (left < m) {
        arr.push(nums1[left])
        left++
      } else {
        arr.push(nums2[right])
        right++
      }

    } else if (nums1[left] > nums2[right]) {
      if (right < n) {
        arr.push(nums2[right])
        right++

      } else {
        arr.push(nums1[left])
        left++

      }

    } else {
      arr.push(nums1[left])
      if (right < n) {
        arr.push(nums2[right])
      }
      left++
      right++
    }
  }
  for (let i = 0; i < arr.length; i++) {
    nums1[i] = arr[i]
  }
};





var merge = function (nums1, m, nums2, n) {
  let length = m + n
  while (n > 0) {
    if (m <= 0) {
      nums1[--length] = nums2[--n]
      continue
    }
    nums1[--length] = nums1[m - 1] >= nums2[n - 1] ? nums1[--m] : nums2[--n]
  }
};

console.log(merge([-1, 0, 1, 1, 0, 0, 0, 0, 0]
  , 4
  , [-1, 0, 2, 2, 3]
  , 5))



// 解法一：双指针 + 从前往后
// 归并排序
// 从小到大按顺序缓存到一个数组中
// nums1按序替换
// 归并排序不太懂的可以看看我的这篇文章
// 排序算法
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let left = 0;
  let right = 0;
  let tmp_nums1 = nums1.slice(0, m);
  let tmp_nums2 = nums2.slice(0, n);
  let result = [];
  while (left < m && right < n) {
    if (tmp_nums1[left] < tmp_nums2[right]) {
      result.push(tmp_nums1[left]);
      left++;
    } else {
      result.push(tmp_nums2[right]);
      right++;
    }
  }
  result = result.concat(tmp_nums1.slice(left)).concat(tmp_nums2.slice(right));
  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
};
// 解法二：双指针 + 从后向前
// 思路
// 两个数组从小到大排序
// 且题目要求 修改nums1为合并排好序的nums1+nums2
// 双指针
// 两个分别指向两个数组尾部的指针
// 从后向前
// 比较两指针位置的值
// 大的一定是结果数组的最大值
// 一一填充到 nums1的末尾
// 遍历完后
// 当 n > 0 时
// 说明 nums2 中还有剩余没有比较的数字
// 将其插入替换 nums1 数组前面n个数字即可
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let count = m + n;
  while (m > 0 && n > 0) {
    nums1[--count] = nums1[m - 1] < nums2[n - 1] ? nums2[--n] : nums1[--m];
  }
  if (n > 0) {
    nums1.splice(0, n, ...nums2.slice(0, n));
  }
};
