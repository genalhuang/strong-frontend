import Counter from './Counter'


let counter = null;

describe('counter所有测试代码', () => {
  beforeAll(() => {
    console.log('1')
    counter = new Counter();
  })
  
  beforeEach(() => {
    console.log('1')
    counter = new Counter();
  })
  
  afterAll(() => {
    console.log('4')
  })
  
  afterEach(() => {
    console.log('over one')
  })
  
  describe('测试增加相关代码', ()=>{
    test('测试Counter中的addOne',() => {
      console.log('2')
      counter.addOne()
      expect(counter.number).toBe(1)
    })
    
    test('测试Counter中的minusOne',() => {
      console.log('3')
      counter.minusOne()
      // expect(counter.number).toBe(0)
      expect(counter.number).toBe(-1)
    })
  })
  
  describe('测试减法相关代码',() =>{
    test('测试Counter中的addTwo',() => {
      counter.addTwo()
      expect(counter.number).toBe(2)
    })
    
    test('测试Counter中的minusTwo',() => {
      counter.minusTwo()
      expect(counter.number).toBe(-2)
    })
  })
})

describe('内鬼',() => {
  beforeEach(() => {
    counter = new Counter();
  })
  test('测试Counter中的minusT2o',() => {
    counter.minusTwo()
    expect(counter.number).toBe(-2)
  })
})
  

