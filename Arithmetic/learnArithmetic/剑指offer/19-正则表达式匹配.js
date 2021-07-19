/**
 * 19 正则表达式匹配
 */

 var isMatch = function(s, p) {
  if (s.length == 0 && p.length == 0) {
      return true;
  }
  if (s.length > 0 && p.length == 0) {
      return false;
  }
  if (p[1] == '*') {
      
      if (s[0] == p[0] || (p[0] == '.' && s.length !== 0)) {
          return isMatch(s.slice(1, s.length), p.slice(2, p.length))
              || isMatch(s.slice(1, s.length), p)
              || isMatch(s, p.slice(2, p.length));
      } else {
          return isMatch(s, p.slice(2, p.length));
      }
  }
  if (s[0] == p[0] || (p[0] == '.' && s.length !== 0)) {
      return isMatch(s.slice(1, s.length), p.slice(1, p.length))
  }
  return false;
};