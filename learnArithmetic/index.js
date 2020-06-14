let arr = []
for(var i= 0;i<100000;i++) {
  var a = Math.random() * 100000
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

console.time('sort')
arr.sort()
console.timeEnd('sort')


