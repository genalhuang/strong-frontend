// // 选择排序
// function SelectSort(arr) {
//   for (let i = 0; i < arr.length-1; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j
//       }
//     }
//     let temp = arr[i]
//     arr[i] = arr[min]
//     arr[min] = temp;
//   }
//   return arr
// }
// console.log(SelectSort([1, 3, 5, 2, 4]))


// 插入排序
function InsertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] && arr[j] < arr[j - 1]) {
        let temp = arr[j - 1]
        arr[j - 1] = arr[j]
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(InsertSort([5, 4, 3, 2, 1, 99]))