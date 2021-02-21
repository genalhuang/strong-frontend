
test('测试匹配器', () => {
  expect(9).toBe(9);
  let a = {one:1,b:{one:2}}
  expect(a).toEqual({one:1,b:{one:2}})

  a=null
  expect(a).toBeNull()

  let b
  expect(b).toBeUndefined()
})

test('toMatch', () =>{
  const str = 'http://www.genal.fun'
  expect(str).toMatch(/genal/)
})

test('toContain', () =>{
  const arr = ['genal', 'fun',{a:1}]
  expect(arr).toContain('fun')
})

 