import {fetchData} from './mock';

// import axios from 'axios'
// jest.mock('axios')

// test('fetchData测试',() => {
//   axios.get.mockResolvedValue({
//     data:{
//       data:1234
//     }
//   })
//   return fetchData().then(data=>{
//     console.log(data,eval(data))
//     expect(eval(data)).toEqual({data: 1234})
//   })
// })

jest.mock('./mock')

test('fetchData测试',() => {
  return fetchData().then(data=>{
    expect(eval(data)).toEqual({data: 1234})
  })
})