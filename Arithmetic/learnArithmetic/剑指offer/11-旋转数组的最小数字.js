
/**
 * 旋转数组的最小数字--e二分法
 */
 function reverseArrMin(arr) {
  if (arr.length <= 2) {
    if (arr[1]) {
      return arr[1] > arr[0] ? arr[0] : arr[1]
    }
    return arr[0]
  }
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let middle = parseInt((end - start) / 2 + start)
    if (arr[middle] < arr[start]) {
      end = middle
    } else if (arr[middle] > arr[end]) {
      start = middle + 1;
    } else {
      --end;
    }
  }
  return arr[start]
}

// console.log(reverseArrMin([3,4,5,1,2]))
// console.log(reverseArrMin([2,2,2,0,1]))
