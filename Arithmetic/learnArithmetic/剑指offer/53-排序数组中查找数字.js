

/**
 * 排序数组中查找数字
 */
 function getNumCount(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end - start) / 2)
  while (start <= end) {
    middle = Math.floor((end - start) / 2 + start)
    if (arr[middle] > num) {
      end = middle - 1;
    } else if (arr[middle] === num) {
      break;
    } else {
      start = middle + 1;
    }
  }
  if(arr[middle] === num) {
    let left = middle;
    let right = middle;

    while (!isNaN(arr[left]) && arr[left] === num) {
      left--;
    }
    while (!isNaN(arr[right]) && arr[right] === num) {
      right++;
    }
  
    return right - left - 1;
  } else {
    return 0
  }
}


let res = getNumCount([1, 2, 3, 3, 3, 3, 4, 5], 3)
console.log(res)