/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {}
  let middle = nums.length/2
  for(let i=0;i<nums.length;i++) {
    obj[nums[i]] = obj[nums[i]] === undefined ? 1 :  ++obj[nums[i]]
    console.log(obj)
    if(obj[nums[i]] > middle) {
      return nums[i]
    }
  }
};


// var majorityElement = function(nums) {
//   let len = nums.length
//   let obj = {}
//   let num = 0
//   nums.forEach(item => {
//     obj[item] = obj[item] ? obj[item] + 1 : 1
//     if(obj[item] > len / 2) num = item
//   })
//   return num
// };


// 真正的哈希表实现之js
var majorityElement = function(nums) {
  let map = new Map()
  for(let i = 0;i<nums.length;i++){
      if(map.has(nums[i])){
          map.set(nums[i],map.get(nums[i])+1)
      }else{
          map.set(nums[i], 1)
      }
  }
  for(let item of map.entries()){
      if(item[1]>nums.length/2){
          return item[0]
      }
  }
}
console.log(majorityElement([2,2,1,1,1,2,2]))