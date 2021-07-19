
/**
 * 
 * 找出数组中重复的数字
 *
 *  */
function getRepeatNumber(arr) {
  let repeatArr = []
  for (let item in arr) {
    if (!repeatArr[arr[item]]) {
      repeatArr[arr[item]] = 1
    } else {
      return arr[item]
    }
  }
}
// console.log(getRepeatNumber([2,3,1,0,2,5,3]))

// 修改数组找出重复的数字
function getRepeatNumber(arr) {
  if (arr.length <= 1) {
    return false;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > arr.length - 1) {
      return false;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    while (arr[i] !== i) {
      if (arr[arr[i]] === arr[i]) {
        return arr[i]
      } else {
        let temp = arr[i];
        arr[i] = arr[temp]
        arr[temp] = temp
      }
    }
  }
}
// console.log(getRepeatNumber([6, 2, 1, 6, 4, 5, 3]))

/**
 * 不修改数组找出重复的数字
 */
function getRepeatNumberNotEdit(arr) {
  if (arr.length <= 1) {
    return false;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > arr.length - 1) {
      return false;
    }
  }
  function digui(arr, start, end) {
    if (start === end) {
      return start;
    }
    let temp = Math.floor((end - start) / 2) + start
    let num = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] <= temp) {
        num++
      }
    }
    if (num < temp) {
      return digui(arr, start, temp)
    } else {
      return digui(arr, temp + 1, end)
    }
  }
  return digui(JSON.parse(JSON.stringify(arr)), 1, arr.length - 1)
}
// console.log(getRepeatNumberNotEdit([2,3,5,4,3,2,6,7]))