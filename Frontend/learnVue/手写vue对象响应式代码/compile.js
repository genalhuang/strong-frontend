// 遍历dom解构， 解析指令和插值表达式
class Compile {
  // 待编译模板， vue实例
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);
   
    // 把模板中的内容移到片段中操作
    this.$fragment = this.node2Fragement(this.$el)
    // 执行编译
    this.compile(this.$fragment)
    // 放回$el中
    this.$el.appendChild(this.$fragment)
  }

  node2Fragement(el) {
    const fragment = document.createDocumentFragment();
    let child;
    while(child = el.firstChild) {
      fragment.appendChild(child);
    }
    return fragment;
  }

  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      if (node.nodeType === 1) {
        // 元素
        // console.log("编译元素" + node.nodeName)

        this.compileElement(node)
      } else if (this.isInter(node)) {
        // 只关心 {{xxx}}
        // console.log('编译插值文本' + node.textContent)
        
        this.compileText(node)
      }

      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  // 文本替换
  compileText(node) {
    // node.textContent = this.$vm[RegExp.$1]

    const exp = RegExp.$1
    this.update(node, exp, 'text')
  }

  update(node, exp, dir) {
    const updator = this[dir + 'Updator'];
    updator && updator(node, this.$vm[exp])

    // 创建Watcher实例, 依赖收集就完成了
    new Watcher(this.$vm, exp, (value) => {
      updator && updator(node, value)
    })
  }

  textUpdator(node, value) {
    node.textContent = value;
  }

  htmlUpdator(node, value) {
    node.innerHTML = value;
  }

  modelUpdator(node, value) {
    node.value = value;
  }

  compileElement(node) {
    // 关心属性
    const nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach(attr => {
      // 规定: k-xxx = 'yyy'
      const attrName = attr.name;
      const exp = attr.value;
      if (attrName.indexOf("v-") == 0) {
        // 指令
        const dir = attrName.substring(2);
        // 执行
        this[dir] && this[dir](node, this.$vm, exp)
      }
    })
  }

  text(node, vm, exp) {
    this.update(node, exp, 'text')
  }
  
  html(node, vm, exp) {
    this.update(node, exp, 'html')
  }

  model(node, vm, exp) {
    this.update(node, exp, 'model')
    node.addEventListener('input', e=>{
      vm[exp] = e.target.value;
    })
  }
}

