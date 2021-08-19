/**
 * 
 * 右下角递增的二维数组中的查找是否有某个值
 */
var findNumberIn2DArray = function (arr, num) {
  if (!arr.length) {
    return false;
  }
  if (arr[0][0] > num) {
    return false;
  }
  let r = 0, c = 0;
  let maxC = arr[0].length;
  let maxR = arr.length
  if (num > arr[maxR - 1][maxC - 1]) {
    return false;
  }
  while (num > arr[r][maxC - 1]) {
    ++r;
  }
  while (num > arr[maxR - 1][c]) {
    ++c
  }
  for (var i = r; i < maxR; i++) {
    for (var j = c; j < maxC; j++) {
      if (arr[i][j] === num) {
        return true;
      }
    }
  }
  return false;
};