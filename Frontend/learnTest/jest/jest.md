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

### mock
作用：
1. 捕获函数调用和返回结果，以及this和调用顺序
2. 可以自由设置返回结果
3. 改变函数内部实现