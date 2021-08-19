/**
 * 
 * 礼物的最大价值 
 */
 var maxValue = function(arr) {
  if (!arr.length || !arr[0].length) {
      return;
    }
    let row = arr.length - 1;
    let col = arr[0].length - 1;
    let camp = {}
    function dpFn(arr, row, col) {
      if (row == 0 && col == 0) {
        return arr[0][0];
      }
      if(camp[`${row}-${col}`]) {
        return camp[`${row}-${col}`]
      }
      let max = 0;
      if (arr[row - 1] && !isNaN(arr[row - 1][col])) {
        let res = dpFn(arr, row - 1, col);
        if(!isNaN(res)) {
          if(res > max) {
            max = res;
          }
        }
      }
      if (arr[row] && !isNaN(arr[row][col - 1])) {
        let res = dpFn(arr, row, col - 1);
        if(!isNaN(res)) {
          if(res > max) {
            max = res;
          }
        }
      }
      camp[`${row}-${col}`] = max + arr[row][col]
      return max + arr[row][col];
    }
    return dpFn(arr,row,col) 
  }


 let a = maxValue([[5,0,1,1,2,1,0,1,3,6,3,0,7,3,3,3,1],[1,4,1,8,5,5,5,6,8,7,0,4,3,9,9,6,0],[2,8,3,3,1,6,1,4,9,0,9,2,3,3,3,8,4],[3,5,1,9,3,0,8,3,4,3,4,6,9,6,8,9,9],[3,0,7,4,6,6,4,6,8,8,9,3,8,3,9,3,4],[8,8,6,8,3,3,1,7,9,3,3,9,2,4,3,5,1],[7,1,0,4,7,8,4,6,4,2,1,3,7,8,3,5,4],[3,0,9,6,7,8,9,2,0,4,6,3,9,7,2,0,7],[8,0,8,2,6,4,4,0,9,3,8,4,0,4,7,0,4],[3,7,4,5,9,4,9,7,9,8,7,4,0,4,2,0,4],[5,9,0,1,9,1,5,9,5,5,3,4,6,9,8,5,6],[5,7,2,4,4,4,2,1,8,4,8,0,5,4,7,4,7],[9,5,8,6,4,4,3,9,8,1,1,8,7,7,3,6,9],[7,2,3,1,6,3,6,6,6,3,2,3,9,9,4,4,8]])
 console.log(maxValue(
  [[1,3,1],[1,5,1],[4,2,1]]))
  console.log(a)