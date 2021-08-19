function isBadVersion(n) {
  if(n<3) {
    return false
  } else {
    return true
  }
}
var solution = function(isBadVersion) {
  return function(n) {
      let left = 0;
      let right = n;
      let middle = parseInt((left+right)/2)
      while(left <= right) {
        middle = parseInt((left+right)/2)
        let a = isBadVersion(middle)
        let b = isBadVersion(middle+1)
        if(!a && b) {
          return middle+1
        } else {
          if(a && b) {
            right = middle
          }
          if(!a && !b) {
            left = middle
          }
        }
      }
  };
};
let func = solution(isBadVersion)

var solution = function(isBadVersion) {
  return function(n) {
      //调用isBadVersion接口   其实可以近似看成是一个升序序列
      let l = 1;
      let r = n;
      while(l<r){
          let mid = l+Math.floor((r-l)/2);   //防止溢出
          if(isBadVersion(mid)==false){
              l=mid+1;
          } else {
              r=mid;
          }
      }
      return l;
  };
};


console.log(func(5))