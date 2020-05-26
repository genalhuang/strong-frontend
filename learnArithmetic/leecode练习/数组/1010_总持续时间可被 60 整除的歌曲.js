/**
 * @param {number[]} time
 * @return {number}
 */
// var numPairsDivisibleBy60 = function(time) {
//     time = time.sort((a,b) => {
//       return a>b;
//     })
//     let count = 0
//     for(let i=0;i<time.length;i++) {
//       for(let j=i+1;j<time.length;j++) {
//         if((time[i] + time[j]) % 60 === 0) {
//           count++
//         }
//       }
//     }
//     return count
// };



// var numPairsDivisibleBy60 = function(time) {
//   let n = time.length;
//   if (time === null || n === 0) return 0;
//   let count = new Array(60);
//   for (let k = 0; k < 60; k++) {
//       count[k] = 0;
//   }
//   for (let i = 0; i < n; i++) {
//       count[time[i] % 60]++;
//   }
//   let result = 0;
//   // 针对余数0和30：
//   result += count[0] * (count[0] - 1) / 2 + count[30] * (count[30] - 1) / 2;
//   // 针对其他余数， 避免重复，只算1-29的：
//   for (let j = 1; j <= 29; j++) {
//       result += count[j] * count[60 - j];
//   }
//   return result;
// };

var numPairsDivisibleBy60 = time => {
  let c = new Array(60).fill(0)
  debugger;
  return time.reduce((count, cur) => {
      count += c[(60 - cur % 60) % 60]
      c[cur % 60] += 1 
      return count
  }, 0)
}


console.log(numPairsDivisibleBy60([30,20,150,100,40]))