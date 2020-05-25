class vue {
  constructor(options) {
    // 保存选项
    this.$options = options
    // 保存data
    this.$data = options.data

    // 响应化处理
    this.observe(this.$data)
    // new Watcher(this, 'foo')
    // this.foo

    // 编译模板 把当前vue实例传进去
    new Compile(options.el, this);

    if(options.created) {
      options.created.call(this);
    }
  }

  observe(value) {
    if(!value || typeof value !== 'object') {
      return;
    }

    Object.keys(value).forEach(key => {
      this.defineReative(value, key , value[key])
      this.proxyData(key)
    })
  }

  defineReative(obj, key, val) {
    // 递归遍历
    this.observe(obj[key])

    // 定义Dep
    const dep = new Dep(); // 每个dep实例和data中每个key有一对一关系

    // 给obj的每一个key定义拦截
    Object.defineProperty(obj, key, {
      get() {
        // 依赖收集
        Dep.target && dep.addDep(Dep.target)
        return val;
      },
      set(newVal) {
        if(newVal !== val) {
          val = newVal
          console.log(key + '属性更新了')
          // 通知依赖更新
          dep.notify();
        }
      }
    })
  }

  // 把$data的值代理到当前vue实例上
  proxyData(key) {
    Object.defineProperty(this, key, {
      get() {
        return this.$data[key]
      },
      set(newVal) {
        this.$data[key] = newVal
      }
    })
  }
}


// 管理所有的Watcher
class Dep {
  constructor() {
    this.deps = []
  }

  addDep(dep) {
    this.deps.push(dep)
  }

  notify() {
    this.deps.forEach(dep => dep.update())
  }
}

// 创建watcher: 保存data中的数值和页面中的挂钩关系
class Watcher {
  constructor(vm, key, cb) {
    // 创建实例时立刻将该实例指向Dep.target便于依赖收集
    this.vm = vm;
    this.key = key;
    this.cb = cb;

    // 触发依赖收集
    Dep.target = this;
    this.vm[this.key] // 触发依赖收集
    Dep.target = null;
  }

  update() {
    // console.log(this.key + '更新了！！！')
    this.cb.call(this.vm, this.vm[this.key])
  }
}