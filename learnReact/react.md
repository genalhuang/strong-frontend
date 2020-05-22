## jsx
优点: 
1. jsx执行更快，编译为javascript代码时进行优化
2. 类型更加安全

注意：
1. jsx必须有根节点
2. html小写，大写是组件

## jsx style样式
```js
let divStyle = {
  background:'red',
  borderBottom: '1px soid red'
}

let element = {
  <div style={divStyle}>陈冠希</div>
}

// classname
let element = {
  <div classname={'class1 ' + classNamebianliang2}>陈冠希</div>
}

```
## React.children
React组件的子节点是一个可能未定义或为null的节点。React.Children.map是一个实用程序函数，可以处理不同的情况。

React.Children.map

 使用this set to thisArg在子项中包含的每个直接子项上调用一个函数。如果children是一个数组，它将被遍历，并且将为数组中的每个子节点调用该函数。如果children为null或未定义，则此方法将返回null或undefined而不是数组。

始终使用React.Children.map来遍历应用中的子项。当children不是数组时，使用children.map会引发错误。

## PropTypes