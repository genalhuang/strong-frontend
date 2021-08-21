### html5 新特性
1. 语义标签
2. 视频和音频
3. canvas和svg
4. 地理定位
5. 拖放api
6. webworker
7. websocket
8. webstorage
9. localstorage

### css3新特性
1. rgba和透明度
2. 背景图片 background-image
3. 文字排列 word-wrap 和文字渲染Text-fill-color 
4. 圆角 border-radius
5. 边框图片 border-image
6. 盒阴影 box-shadow
7. 媒体查询 @media
8. 渐变效果（Gradient）
9. Transitions, Transforms 和 Animation

### 什么是bfc
bfc是块级格式化上下文, 可以看做是隔离了的独立容易, 容器里面的元素不会在布局上影响外面的元素。

怎么样触发bfc
1. 根元素
2. 浮动元素
3. 绝对定位元素
4. 行内块元素
5. 表格单元格
6. overflow不为visible
7. 弹性元素

### px, rem, vh, em各自代表的含义
1. rem, 相对于根元素html的fontsize
2. px, 像素, 像素px是相对于显示器屏幕分辨率而言的。
3. vw,vh, 视窗宽高百分比
4. 元素用em的话是相对于该元素的font-size

### css图层
- 在渲染dom的时候, 浏览器实际做的工作是：
1. 将dom分割为多个图层
2. 对每个图层计算样式结果（Recalculate style-样式重计算)
3. 为每个节点生成图形和位置（重排, 回流）（重要）
4. 将每个节点绘制到图层位图中（重绘)（重要）
5. 组合多个图层到页面, 生成最终屏幕显示

- Chrome 中满足 以下任意情况 就会创建图层：

1. 拥有 3D 变换的 css 属性 transform

2. 加速视频解码的 <video> 节点

3. <canvas> 且浏览器硬件加速

4. css3 动画节点 animation

5. 拥有 css 加速属性的元素 (will-change: transform; 记得取消为 auto )