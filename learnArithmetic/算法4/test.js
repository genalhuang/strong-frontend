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

// console.log(InsertSort([5, 4, 3, 2, 1, 99]))


// 希尔排序
function XierSort(arr) {
  let h = 1;
  while(h < arr.length/3) {
    h= 3*h + 1;
  }
  while(h>=1) {
    for(let i=h;i<arr.length;i++) {
      for(let j=i;j>=h;j-=h) {
        if(arr[j-h] && arr[j] < arr[j - h]) {
          let temp = arr[j - h]
          arr[j - h] = arr[j]
          arr[j] = temp;
        }
      }
    }
    h = Math.floor(h/3)
  }
  return arr
}


// console.log(XierSort([5, 4, 3, 2, 1, 45,99,3]))



// 归并排序
function merge(leftArr, rightArr) {
  console.log(leftArr, rightArr)
  let result = []
  while(leftArr.length > 0 && rightArr.length > 0) {
    if(leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  return result.concat(leftArr).concat(rightArr)
}

function MergeSort(arr) {
  if(arr.length === 1) return arr;
  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0, mid);
  let right = arr.slice(mid)
  return merge(MergeSort(left),MergeSort(right))
}

var arr= [12, 32, 36, 45, 56, 76, 78]
// console.log(MergeSort(arr))


// 快速排序
function QuickSort(arr) {
  if(arr.length <= 1) return arr;
  let v = arr[0]
  let leftArr = [];
  let rightArr = []
  for(let i=1;i<arr.length;i++) {
    if(arr[i] < v) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return QuickSort(leftArr).concat(v, QuickSort(rightArr))
}
var arr= [12, 32, 36, 45, 56, 76, 78]
console.log(QuickSort(arr))
