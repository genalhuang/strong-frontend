/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let i=0;
  let j=-1;
  let bian = 0
  let MyArr = []
  debugger
  if(matrix.length === 0) {
    return []
  }
  function digui(arr) {
    if(MyArr.length === arr.length*arr[0].length) {
      return 
    }
    if(j === arr[0].length-bian-1) {
      MyArr.push(arr[i][j])
    }
    while(j<arr[0].length-bian-1) {
      j++
      MyArr.push(arr[i][j])
      if(MyArr.length === arr.length*arr[0].length) {
        return 
      }
    }
    while(i<arr.length-bian-1) {
      i++
      MyArr.push(arr[i][j])
      if(MyArr.length === arr.length*arr[0].length) {
        return 
      }
    }
    while(j>bian) {
      j--
      MyArr.push(arr[i][j])
      if(MyArr.length === arr.length*arr[0].length) {
        return 
      }
    } 
    while(i>bian) {
      i--
      MyArr.push(arr[i][j])
      if(i == 1 && j==0) {
        bian = 1
      }
      if(i == 2 && j==1) {
        bian = 2
      }
      if(i == 3 && j==2) {
        bian = 3
      }
      if(i == 4 && j==3) {
        bian = 4
      }
      if(i == 5 && j==4) {
        bian = 5
      }
      if(MyArr.length === arr.length*arr[0].length) {
        return 
      }
    }

    j=bian-1
    i=bian
    digui(arr)
  }
  digui(matrix)
  return MyArr
};