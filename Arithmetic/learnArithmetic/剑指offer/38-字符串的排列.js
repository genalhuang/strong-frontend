/**
 * 字符串的排列
 */
 function getOrderStr(str) {
  if (!str) {
    return []
  }
  let result = []
  let myStrArr = str.split('')
  function digui(strArr, arr) {
    if (strArr.length === 0) {
      let str = arr.join('')
      return result.push(str)
    }
    for (var i = 0; i < strArr.length; i++) {
      let str = strArr[i]
      let myArr = JSON.parse(JSON.stringify(arr))
      let myStrArr = strArr.slice(0, i).concat(strArr.slice(i + 1));
      myArr.push(str)
      digui(myStrArr, myArr)
    }
  }
  digui(myStrArr, [])
  return Array.from(new Set(result));
}
console.log(JSON.stringify(getOrderStr("aaacb")))
// console.log(getOrderStr("ac"))
// console.log(getOrderStr("abc"))


var permutation = function (s) {
  const rec = [], vis = [];
  const n = s.length;
  const arr = Array.from(s).sort();
  const perm = [];
  const backtrack = (arr, i, n, perm) => {
    if (i === n) {
      rec.push(perm.toString());
      return;
    }
    for (let j = 0; j < n; j++) {
      if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
        continue;
      }
      vis[j] = true;
      perm.push(arr[j]);
      backtrack(arr, i + 1, n, perm);
      perm.pop();
      vis[j] = false;
    }
  }

  backtrack(arr, 0, n, perm);
  const size = rec.length;
  const recArr = new Array(size).fill(0);
  for (let i = 0; i < size; i++) {
    recArr[i] = rec[i].split(',').join('');
  }
  return recArr;
};
console.log(JSON.stringify(permutation("aaacb")))