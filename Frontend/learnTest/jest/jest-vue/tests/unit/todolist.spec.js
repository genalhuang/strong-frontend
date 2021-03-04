import TodoList from '../../src/containers/TodoList/TodoList.vue'
import { shallowMount } from '@vue/test-utils'

describe('TodoList.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.text()).toMatch('TodoList')
  })
})
