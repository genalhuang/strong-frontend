/**
 * 把数字翻译成字符串
 */

 function parseNumToStr(num) {
  var map = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let strNum = String(num)
  if (!strNum) {
    return 0;
  }
  let count = 0;
  function parseItem(str) {
    if (!str) {
      ++count
      return;
    }
    let str2 = map[str[0] + str[1]]
    parseItem(str.slice(1))
    if (str2) {
      parseItem(str.slice(2))
    }

  }
  parseItem(strNum, [])
  return count;
}

console.log(parseNumToStr(25))
