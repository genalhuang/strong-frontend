/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 // dp[m][n] = dp[m-1][n] + dp[m][n-1]
//  let arr =[]
//  let flag = true
// var uniquePaths = function(m, n) {
//   console.log(m,n)
//   if(n < 0 || m < 0) {
//     return 0
//   } 
//   if(n===1 && m === 1) {
//     return 1
//   }
//   if(flag) {
//     for(let i=0;i<m+1;i++) {
//       arr.push([])
//     }
//     flag = false
//   }

//   if(arr[m] && arr[m][n] !== undefined) {
//     return arr[m][n]
//   }
//   return arr[m][n]=(uniquePaths(m -1, n) + uniquePaths(m, n - 1))
// };


var uniquePaths = function(m, n) {
  var dp = new Array(m);
  for(var i = 0;i<n;i++){
      dp[i] = new Array(m);
      dp[i][0] = 1;
  }
  for(var r = 0;r < m;r++){
      dp[0][r] = 1;
  }
  for(var j = 1;j<n;j++){
      for(var z = 1;z<m;z++){
          dp[j][z] = dp[j-1][z]+dp[j][z-1]
      }
  }
  return dp[n-1][m-1];
};

console.log(uniquePaths(7
  ,16))