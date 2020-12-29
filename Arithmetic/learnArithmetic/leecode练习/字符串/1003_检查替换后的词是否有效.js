/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function(S) {
  while(S.indexOf('abc') !== -1) {
    S = S.split('abc').join('')
  }
  return S === 'abc' || S === ''
};

console.log(isValid("abcabcababcc"));