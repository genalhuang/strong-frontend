/**
 * 第一个只出现一次的字符
 */
 const firstUniqChar = str => {
  if (!str) return ' ';
  const m = new Map();
  for (const s of str) {
      m.set(s, (m.get(s) || 0) + 1);
  }
  for (const s of m) {
      if (s[1] === 1) return s[0];
  }
  return ' ';
};

console.log(firstUniqChar('acabasdfetert'))
/**
 * 解题思路：
 * 需要判断多个字符是不是在某个字符串中出现过或者多个字符在字符串中出现的次数，那么我们可以基于数组创建一个简单的哈希表
 */