/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let chazhi = 0;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    let cha = timeSeries[i + 1] - timeSeries[i]
    if (cha < duration) {
      chazhi += (duration - cha)
    }
  }
  return duration*timeSeries.length - chazhi
};
console.log(findPoisonedDuration([1,2,3,4,5],4))