
/**
 * 股票的最大利润
 */
// 傻逼循环法
var getMaxMoney = function (arr) {
  let lirun = 0;
  for(var i=0;i<arr.length;i++) {
    let buy = arr[i]
    let seil = arr[i]
    for(var j=i;j<arr.length;j++) {
      if(arr[j] > seil) {
        seil = arr[j]
      }
    }
    if(seil - buy > lirun) {
      lirun = seil - buy
    }
  }
  return lirun;
};

// 动态规划法
// dp[i]为当卖出价格为数组中第i个元素时的最大利润，当卖出价固定时，买入价越低利润越大，
// 扫描到数组第i个元素时，只要我们能记住之前i-i个元素中的最小值，就能算出当前价格卖出的最大利润
var getMaxMoney = function (arr) {
  let lastMin = arr[0]
  let lirun = 0;
  for(var i=1;i<arr.length;i++) {
    if(lastMin > arr[i]) {
      lastMin = arr[i]
    }
    if((arr[i] - lastMin)> lirun) {
      lirun = arr[i] - lastMin
    }
  }
  return lirun;
};



let res = getMaxMoney([9, 11, 8, 5, 7, 12, 16, 14])
// let res = getMaxMoney([7,6,4,3,1])
console.log(res)