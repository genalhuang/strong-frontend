import { fetchData1, fetchData2} from './fetchData'


beforeAll(() => {
  console.log('1')
})

afterAll(() => {
  console.log('4')
})

test('fetchdata1', (done) => {

  fetchData1(data => {
    expect(data).toEqual({data:'asdf'})
    console.log('2')
    done()
  })

})

test('fetchdata2', () => {

  return fetchData2().then(data=> {
    console.log('3')
    expect(data).toEqual({data:'asdf'})
  })
})

test('fetchdata22', () => {
  return expect(fetchData2()).resolves.toEqual({data:'asdf'})
})

test('fetchdata3', async () => {
  const data = await fetchData2()
  expect(data).toEqual({data:'asdf'})
}) 
 
// test('fetchdata33', async () => {
//   await expect(fetchData2()).resolves.toMatchObject({data:'asdf'})
// })