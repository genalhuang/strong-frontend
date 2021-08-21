## vue3优化相关
1. Object.defineProperty => Proxy
2. typescript重写替代flow
3. 利用模板的静态分析把组件粒度的vdom缩小为动态元素和动态属性，静态节点提升到外面去，实际生成vnode的就只有动态的元素
4. tree-shanking,进入bundle的只有被引入并且真正会被使用的代码块。

## vue3特性相关
1. composition api
2. teleport传送，希望继续在组件内部使用Dialog, 又希望渲染的 DOM 结构不嵌套在组件的 DOM 中。
3. Suspense，更好的spinning
4. fragment， 允许多个根节点
5. 新工具vite