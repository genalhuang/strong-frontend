/**「外观数列」是一个整数序列，从数字 1 开始，
 * 序列中的每一项都是对前一项的描述。前五项如下：
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return '1';
  }
  var zh = (a) => {
    let m = 1;
    let res = ''
    for (let i = 0; i < a.length; i++) {
      if (a[i] === a[i + 1]) {
        m++
      } else {
        res += m + a[i]
        m = 1
      }
    }
    n--
    return n == 1 ? res : zh(res)
  }
  return zh('1');
};
console.log(countAndSay(5))