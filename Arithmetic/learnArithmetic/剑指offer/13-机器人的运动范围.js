/**
 * 
 * 机器人的运动范围
 */
 function isExeed(k, start, end) {
  let sum = 0;
  (start + '').split('').concat((end + '').split('')).map(item => {
    sum += parseInt(item);
  })
  return k < sum
}
function movingCount(k, row, col) {
  if (k === 0 && row + col > 0) {
    return 1;
  }
  if (k <= 0 || row <= 0 || col <= 0) {
    return 0;
  }
  isVisited = []
  for (var i = 0; i <= row; i++) {
    isVisited.push([])
  }
  function movingCountCore(k, row, col, start, end) {
    console.log(start, end)
    let sum = 0;
    if (!isVisited[start][end] && !isExeed(k, start, end) && start <= row - 1 && end <= col - 1) {
      isVisited[start][end] = true;
      ++sum;
      if (start - 1 >= 0) {
        sum += movingCountCore(k, row, col, start - 1, end)
      }
      if (start + 1 <= row) {
        sum += movingCountCore(k, row, col, start + 1, end)
      }
      if (end - 1 >= 0) {
        sum += movingCountCore(k, row, col, start, end - 1)
      }
      if (end + 1 <= col) {
        sum += movingCountCore(k, row, col, start, end + 1)
      }
    }
    return sum;
  }
  return movingCountCore(k, row, col, 0, 0)
}

// console.log(movingCount(0,4, 5))
// console.log(movingCount(4,5,5))


