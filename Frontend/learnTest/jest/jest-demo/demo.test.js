import { runCallback, getData } from './demo'

import axios from 'axios';
jest.mock('axios')


// 傻逼方式，还要改原函数
// test('测试 runCallback', () => {
//   const func = () => {
//     return 'hello'
//   }

//   expect(runCallback(func)).toBe('hello')
// })

// 正确方式
test('测试 runCallback', () => {
  const func = jest.fn();
  runCallback(func);
  expect(func).toBeCalled();
  console.log(func.mock)
})

test('测试 runCallback', () => {
  const func = jest.fn();
  // func.mockReturnValueOnce('hhz').mockReturnValueOnce('genal')
  func.mockReturnValue('hhz')
  runCallback(func);
  runCallback(func);
  expect(func.mock.calls.length).toBe(2);  
  console.log(func.mock)
})

test.only('测试getData', async () => {
  axios.get.mockReturnValue({data:'hello'})
  console.log(getData())

  expect(getData()).toEqual({data:'hello'})
})