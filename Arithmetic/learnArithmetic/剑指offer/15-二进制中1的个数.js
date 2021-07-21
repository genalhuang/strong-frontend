/**
 * 
 * 二进制中1的个数
 */

/**
 * 
 * 
 * 
操作	    结果	  等同于	           结果
5 & 1	     1     0101 & 0001	    0001
5 | 1	     5     0101 | 0001	    0101
5 ^ 1	     4     0101 ^ 0001	    0100
~ 5	       10    ~0101	          1010
5 << 1     10    0101 << 1	      1010
5 >> 1     2	   0101 >> 1	      0010

<<	零填充左位移	通过从右推入零向左位移，并使最左边的位脱落。
>>	有符号右位移	通过从左推入最左位的拷贝来向右位移，并使最右边的位脱落。
>>>	零填充右位移	通过从左推入零来向右位移，并使最右边的位脱落。
-5	11111111111111111111111111111011
-5 >> 1	11111111111111111111111111111101 (-3)

如果是负数，比如-5 = 111111111011 取反加一等于对应的正数 000000101
 * 1001 右移一位 0100 等于4
 */
console.log(9 >> 1)


// 垃圾写法 没办法判断负数
function action(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  let mi = 2;
  for (var i = 0; mi * 2 <= num; i++) {
    mi *= 2;
  }
  return 1 + action(num - mi);
}

console.log(action(9))


// 位运算 之 负数会出现死循环
function action(num) {
  let count = 0;
  while (num > 0) {
    if (num & 1) {
      count++
    }
    num = num >> 1;
  }
  return count;
}

console.log(action(9))

// 位运算 之 完美
function action(num) {
  let count = 0;
  let flag = 1;
  while (flag) {
    if (num & flag) {
      count++;
    }
    flag = flag << 1
  }
  return count;
}

console.log(action(9))