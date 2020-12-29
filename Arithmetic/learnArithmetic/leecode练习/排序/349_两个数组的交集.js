/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let arr = []
  for(var i=0;i<nums1.length;i++) {
    for(var j=0;j<nums2.length;j++) {
      if(nums1[i]===nums2[j]) {
        if(arr.indexOf(nums1[i]) === -1) {
          arr.push(nums1[i])
          break;
        }
      }
    }
  }
  return arr
};
console.log(intersection([1,2,2,1],[2,3]))