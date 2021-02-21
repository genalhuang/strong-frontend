
import { add, miuns, multi } from './main.js';

test('测试加法3+7', () => {
  expect(add(3,7)).toBe(10);
})

test('测试减法', () => {
  expect(miuns(3,3)).toBe(0);
})

test('测试乘法', () => {
  expect(multi(3,3)).toBe(9);
})