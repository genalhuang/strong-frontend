/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// var subsets = function(nums) {
//   let ws = [[]];
//   for(let i=0; i < nums.length; ++i) {
//       for(let j=0, len = ws.length; j < len; ++j) {
//           ws.push(ws[j].concat([nums[i]]));
//       }
//   }
//   return ws;
// };

var subsets = function(nums) {
  let res = [];
  let len = nums.length;
  // 2^n 获取所有状态
  let resAll = 1 << len;
  for(let i = 0;i < resAll;i++){
      let subset = [];
      // 当前数组的索引位置
      let j = 0;
      // 移位
      let iCopy = i;
      while(iCopy != 0){
          //判断当前位置是否是1
          if( (iCopy & 1) == 1){
              subset.push(nums[j]);
          }
          j++;
          // 右移一位
          iCopy >>= 1;
      }
      res.push(subset);
  }
  console.log(resAll)
  return res;
};


console.log(subsets([1,2,3]))