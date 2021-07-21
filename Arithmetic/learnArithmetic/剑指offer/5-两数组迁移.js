/**
 * 两数组迁移
 */

function remveArr(arr1, arr2) {
  if (!arr2.length) {
    return arr1;
  }
  let p1 = arr1.length - 1;
  let p2 = p1 + arr2.length
  while (arr2.length) {
    while (p2 > p1) {
      if (arr1[p1] >= arr2[arr2.length - 1]) {
        arr1[p2] = arr1[p1];
        arr1[p1] = null;
        --p2;
        --p1
      } else {
        arr1[p2] = arr2[arr2.length - 1];
        --p2;
        arr2.splice(arr2.length - 1, arr2.length)
      }
    }
  }
  return arr1;
}

// console.log(remveArr([1,3,5,7,8],[2,4,6,9]))