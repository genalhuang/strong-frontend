/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let s = num.toString()
  let sum = ''
  let arr = [1, 10, 100, 1000, 10000, 100000]
  for (var i = 0; i < s.length; i++) {
    if (s[i] != 0) {
      sum += zidian(s[i] * arr[s.length - 1 - i])
    }

  }
  return sum
};
function zidian(num) {
  if (1 <= num && num < 10) {
    if (num === 4 || num === 9) {
      if (num === 4) {
        return 'IV'
      } else {
        return 'IX'
      }
    }
    let s = ''
    if (num >= 5) {
      s = 'V'
      for (var i = 0; i < num - 5; i += 1) {
        s += 'I'
      }
      return s
    } else {
      for (var i = 0; i < num; i += 1) {
        s += 'I'
      }
      return s
    }
  }
  if (10 <= num && num < 100) {
    if (num === 40 || num === 90) {
      if (num === 40) {
        return 'XL'
      } else {
        return 'XC'
      }
    }
    let s = ''
    if (num >= 50) {
      s = 'L'
      for (var i = 0; i < num - 50; i += 10) {
        s += 'X'
      }
      return s
    } else {
      for (var i = 0; i < num; i += 10) {
        s += 'X'
      }
      return s
    }
  }
  if (100 <= num && num < 1000) {
    if (num === 400 || num === 900) {
      if (num === 400) {
        return 'CD'
      } else {
        return 'CM'
      }
    }
    let s = ''
    if (num >= 500) {
      s = 'D'
      for (var i = 0; i < num - 500; i += 100) {
        s += 'C'
      }
      return s
    } else {
      for (var i = 0; i < num; i += 100) {
        s += 'C'
      }
      return s
    }

  }
  if (1000 <= num && num < 1000000) {
    let s = ''
    for (var i = 0; i < num; i += 1000) {
      s += 'M'
    }
    return s
  }
}

console.log(intToRoman(5000))


// 万位内快速玩法 不够扩展性
var intToRoman = function (num) {
  var Q = ["", "M", "MM", "MMM"];
  var B = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var S = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var G = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return Q[Math.floor(num / 1000)] + B[Math.floor((num % 1000) / 100)] + S[Math.floor((num % 100) / 10)] + G[num % 10];
};

//贪心算法
var intToRoman = function (num) {
  var romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var arr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var str = ''

  for (var i = 0; i < 13;) {
    if (num >= arr[i]) {
      num -= arr[i]
      str += romanArr[i]
    } else {
      i++
    }
  }
  return str
};

console.log(intToRoman(500))