

/**
 * 数组中数值和下标相等的元素
 */
 var getNum = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((end - start) / 2 + start)
    if (arr[middle] > middle) {
      end = middle - 1
    } else if (arr[middle] === middle) {
      return middle
    } else {
      start = middle + 1;
    }
  }
};

let res = getNum([0,3,4,5])
console.log(res)