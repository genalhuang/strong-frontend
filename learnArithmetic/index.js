let arr = []
for(var i= 0;i<10000000;i++) {
  var a = Math.random() * 10000000
  arr.push(a)
}
console.time('xier')
function xier(arr) {
  let temp
  for(var gap = arr.length / 2;gap>0;gap= parseInt(gap/2)) {
    for (var i = gap; i < arr.length; i++) {
      // 对每一组分组好的数据进行插入排序
      for (var j = i - gap; j >= 0; j -= gap) {
        if (arr[j] > arr[j + gap]) {
          temp = arr[j];
          arr[j] = arr[j + gap];
          arr[j + gap] = temp;
          break;
        }
      }
    }
  }
  return arr
}
xier(arr)
console.timeEnd('xier')

// console.time('sort')
// arr.sort()
// console.timeEnd('sort')

console.time('quick')
const quickSort = (num, left, right) => {
  var list = [[left, right]]; // 将[left,right]存入数组中，类似于递归入栈
  while (list.length > 0) { // 若list不为空，循环弹出list最后一个数组进行快排
      var now = list.pop(); // 弹出list末尾。(也可用list.shift()取出list第一个数组，但在数据量较大时，这种方式效率较低)
      if (now[0] >= now[1]) { // 若左右指针相遇，待排序数组长度小宇1，则无需进行快排(注意不能写成now[0]==now[1]，这里now[0]是有可能大于now[1]的
          continue;
      }
      var i = now[0], j = now[1], flag = now[0]; // 以下与递归方法相同，请参考上面的递归详解
      while (i < j) {
          while (num[j] >= num[flag] && j > flag) j--;
          if (i >= j) {
              break;
          }
          while (num[i] <= num[flag] && i < j) i++;
          let temp = num[flag];
          num[flag] = num[j];
          num[j] = num[i];
          num[i] = temp;
          flag = i;
      }
      list.push([now[0], flag - 1]); // 将flag左边数组作为待排序数组，只需将左右指针放入list即可。
      list.push([flag + 1, now[1]]); // 将flag右边数组作为待排序数组，只需将左右指针放入list即可。
  }
}
quickSort(arr,0,arr.length)
console.timeEnd('quick')