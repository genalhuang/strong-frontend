### 单元测试
模块测试

### 集成测试
多个模块测试

### 匹配器
- toBe（） ===/object.is
- toEqual  只匹配匹配对象字段，内容相等

### 在jest中使用es6module
- 使用babel
yarn add --dev babel-jest @babel/core @babel/preset-env
- 配置babel
```js
// .babelrc
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": "ie 11"
      }
    }]
  ]
}
```
- 如果需要在jest单元测试中使用async/await，需要在babel文件中加一行
```
{
  "plugins": ["@babel/plugin-transform-runtime"]
}
```

### 钩子函数
在运行测试用例之前、后需要对数据进行初始化时使用
afterAll(fn, timeout) 整个用例文件开始前
afterEach(fn, timeout) 每个用例开始前
beforeAll(fn, timeout)
beforeEach(fn, timeout)
- 遇到异步测试用例也会异步等待

### 分组
describe()
同类型的测试用例，比如某个类的加法类测试，减法类测试
- describe中可写钩子函数，对其子describe也生效,对同级describe不生效

### jest.fn() 生成mock函数
1. 捕获函数调用和返回结果，以及this和调用顺序
2. 可以自由设置返回结果
3. 改变函数内部实现

### mock
#### mock使用
1. 模拟axios请求
```
// xxx.test.js
import axios from 'axios'
jest.mock('axios')

// 配置axios返回值
axios.get.mockResolvedValue({
  data:1234
})
```
2. 自己写mock函数
```
1. 创建__mocks__目录
2. 在__mocks__目录下创建同名函数：mock.js
3.在mock.test.js中
jest.mock('./mock')
test('fetchData测试',() => {
  return fetchData().then(data=>{
    expect(eval(data)).toEqual({data: 1234})
  })
})

4. 如果需要引入真正的文件里面的导出
const {xxx} = jest.requireActual('./mock)
```
3. automock: true 配置

### vue中配置jest
#### @vue/test-utils
- shallowMount 浅渲染，只渲染当前组件，不渲染子组件
- mount 深渲染