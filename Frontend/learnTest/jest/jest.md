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
