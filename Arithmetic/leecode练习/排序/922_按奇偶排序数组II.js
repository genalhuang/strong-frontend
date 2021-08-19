/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    let index = 1;
    if (i % 2 === 0) {
      while(i+index <arr.length) {
        if(arr[i+index] %2 ===0) {
          let temp = arr[i+index]
          arr[i + index] = arr[i]
          arr[i] = temp
          index = 1;
          break;
        } else {
          index++
        }
      }
    } else {
      while(i+index <arr.length) {
        if(arr[i+index] %2 !==0) {
          let temp = arr[i+index]
          arr[i + index] = arr[i]
          arr[i] = temp
          index = 1;
          break;
        } else {
          index++
        }
      }
    }
  }
  return arr
};

console.log(sortArrayByParityII([4, 2, 5, 7]))