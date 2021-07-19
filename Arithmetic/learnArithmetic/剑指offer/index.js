


/**
 *  
 */

function arrToFindNSum(arr, n, sum) {
  if(n <= 0 && sum !== 0) {
    return false;
  }
  if(n===0 && sum === 0) {
    return true;
  }
  if(sum<0) {
    return false;
  }
  for(var i=0;i<arr.length;i++) {
    let myArr = JSON.parse(JSON.stringify(arr))
    myArr.splice(i,1)
    if((n-1)===0 && (sum-arr[i]) === 0) {
      return [arr[i]];
    }
    let res = arrToFindNSum(myArr,n-1, sum-arr[i])
    if(res) {
      return [arr[i]].concat(res)
    }
  }
  return false;
}

console.log(arrToFindNSum([1,2,3,4,5],3, 40))
console.log(arrToFindNSum([1,2,3,4,5],2, 2))
console.log(arrToFindNSum([-1,2,3,4,5,5,6,7,7,8,90],2, 91))
console.log(arrToFindNSum([1,2,3,4,5,6,7], 4, 19))