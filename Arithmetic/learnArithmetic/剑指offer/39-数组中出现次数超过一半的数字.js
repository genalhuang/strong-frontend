/**
 * 数组中出现次数超过一半的数字
 */
 function getMoreNum(arr) {
  if(!arr.length) {
    return;
  }
  if(arr.length===1) {
    return arr[0]
  }
  let count = []
  let paf = Math.floor(arr.length/2)
  for(var i=0;i<arr.length;i++) {

    if(!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      ++count[arr[i]]
      if(count[arr[i]] > paf) {
        return arr[i]
      }
    }
  }

}

console.log(getMoreNum([1]))