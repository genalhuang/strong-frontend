/* 
index.js  webpack入口文件
1. 运行指令:
开发环境:
webpack ./src/index.js -o ./build/builtinModules.js --mode=development
webpack以 src/index为入口打包,输出到build/built.js 
生产环境:
webpack ./src/index.js -o ./build/builtinModules.js --mode=production

*/


// webpack只能打包 js和json文件
import data from './data.json'
function add(x,y) {
  return x+y;
}
console.log(add(1,2))
console.log(data)


// 不能打包css,less文件 要加载loader
import './index.css'
import './index.less'
