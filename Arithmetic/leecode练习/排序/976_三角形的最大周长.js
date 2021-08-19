/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(arr) {
  arr = arr.sort((a,b)=>b-a)
  if(arr.length < 3) {
    return 0;
  }
  for(var i=0;i<=arr.length-3;i++) {
    if(arr[i] - arr[i+1] < arr[i+2] && arr[i] + arr[i+2] > arr[i+1]) {
      return arr[i]+arr[i+1]+arr[i+2]
    }
  }
  return 0
};

console.log(largestPerimeter([2,1,1]))