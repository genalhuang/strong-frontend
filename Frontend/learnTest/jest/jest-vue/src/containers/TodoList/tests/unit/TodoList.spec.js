import TodoList from '../../TodoList.vue'
import UndoList from '../../components/UndoList.vue'
import Header from '../../components/Header.vue'
import { shallowMount } from '@vue/test-utils'

describe('TodoList 组件', () => {
  it('TodoList 初始化时， undoList应为空', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.vm.$data.undoList;
    expect(undoList).toEqual([])
  })
  
  it('TodoList 监听到header的add事件时 会增加一个内容', () => {
    // 这是集成测试
    // const content = 'genal'
    // const wrapper = shallowMount(TodoList);
    // const header = wrapper.findComponent(Header)
    // header.vm.$emit('add', content)
    // // wrapper.vm.addUndoItem('genal');
    // const undoList = wrapper.vm.$data.undoList;
    // expect(undoList).toEqual([content])
  
  
    // 这是单元测试
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1,2,3]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.$data.undoList).toEqual([1,2,3,4])
  })
  
  it('TodoList 调用 UndoList 应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList);
    const undoList = wrapper.findComponent(UndoList);
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })
  
  it('TodoList 中handleDeleteItem方法被调用时， undolist列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList);
    wrapper.setData({
      undoList: [1,2,3]
    })
  
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([1,3])
  })
})
