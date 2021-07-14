// var lengthOfLIS = function(nums) {
//   let n = nums.length;
//   if(n == 0){
//       return 0;
//   }
//   let dp = new Array(n).fill(1);
//   for(let i = 0;i < n;i++){
//       for(let j = 0;j < i;j++){
//           if(nums[j] < nums[i]){
//               dp[i] = Math.max(dp[i],dp[j]+1);
//           }
//       }
//   }
//   return Math.max.apply(null,dp);

// };

// let arr =  [4,10,4,3,8,9];
// console.log(lengthOfLIS(arr))


let x= 0;
async function test() {
    x = x + await 2;
    
    console.log(x)
}

test()
x+=1
console.log(x)