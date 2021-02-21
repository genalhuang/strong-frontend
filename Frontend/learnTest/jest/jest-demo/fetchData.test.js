import { fetchData1, fetchData2} from './fetchData'

test('fetchdata1', (done) => {
  fetchData1(data => {
    expect(data).toEqual({data:'asdf'})
    done()
  })
})

test('fetchdata2', () => {
  return fetchData2().then(data=> {
    expect(data).toEqual({data:'asdf'})
  })
})

test('fetchdata22', () => {
  return expect(fetchData2()).resolves.toEqual({data:'asdf'})
})

// test('fetchdata3', async () => {
//   const data = await fetchData2()
//   data.toEqual({data:'asdf'})
// }) 
 
// test('fetchdata33', async () => {
//   await expect(fetchData2()).resolves.toMatchObject({data:'asdf'})
// })