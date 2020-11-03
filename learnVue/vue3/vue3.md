<template>
  <div>
    {{age}}
  </div>
</template>

<script>
import {reactive, ref, isRef} from 'vue';
/**注意点：
 * 1. 在组合api中定义的变量/方法，要想在外界使用必须通过return {xxx, xxx}暴露出去
 * 2. ref只能监听简单类型的变化
 * 3. setUp函数
 *    3.1 执行时机：beforeCreate setUp created
 *    由于在执行setUp函数的时候，还没有执行created生命周期方法，所有在setUp函数中是无法使用data和methods； 
 *    3.2 vue为了避免错误使用，直接将setup函数中的this修改成了undefined
 *    3.3 setUp函数只能是同步不能是异步
 * 4. reative函数
 *    4.1 reative参数必须是对象、数组
 *    4.2 如果传递了其他对象默认情况下不会自动更新，如果想更新，可以通过重新赋值的方式；
 * 5. ref
 *    5.1 实现简单值的监听
 *    5.2 ref底层还是reative 系统会自动根据我们给ref传入的值将它转换成ref(xxx) => reative({value:xxx}) 同理shallowRef
 *    5.3 通过在ref创建的数据， 在html中使用不需要通过.value访问值, 在js中需要.value
 * 6. shallowReactive shallowRef 创建非递归监听的数据(父改变子会跟着改变， 但是子不会触发第一层父的改变了)
 *    6.1 如果是通过shallowRef创建的数据，那么Vue监听的是xxx.value的变化，并不是第一层的变化
 * 7. toRaw
 *    7.1 从reactive或ref 中得到原始数据 
 *    7.2 当数据需要改变但是ui不需要改变的时候使用
 * 8. markRow 数据永远不被追踪
 * 9. toRef 将对象中的属性变成响应式， 修改响应式数据会影响原数据，不改变ui
 * 10. customRef 自定义ref的get和set 不能在get方法中set值
 * 11. onMounted 便于在组合api中监听生命周期函数，传入回调函数
 * 12. readonly 创建只读数据 let state = readonly({name:'edison'}) 注意是递归只读
 * 13. shallowReadonly 第一层只读
 *
 */
export default {
  name: 'App',
  // setup函数是组合api的入口函数
  methods: {
    myFn1() {
      console.log('adf')
    }
  },
  setup() {
    console.log(this)
    const age = ref(1)
    const age2 = reactive({
      value: 2
    })
    console.log(age,age2)
    return {age}
  }
}

</script>
<script>
let obj = {name: 'edison', age: 18};
let state = new Proxy(obj, {
  get(obj, key) {
    console.log(obj,key)
  },
  set() {

  }
})

</script>
