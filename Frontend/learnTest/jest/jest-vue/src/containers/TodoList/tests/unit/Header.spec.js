import Header from '../../components/Header.vue'
import { shallowMount } from '@vue/test-utils'
import {findTestWrapper} from '@/utils/testUtils'

it('Header 样式改变做提示', () => {
  const wrapper = shallowMount(Header)
  expect(wrapper).toMatchSnapshot();
})

it('Header 包含 input 框', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper,'input');
  expect(input.exists()).toBe(true);
})

it('Header 中 input 框初始内容为空', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue;
  expect(inputValue).toBe('');
})

it('Header 中 input 框值发生变化，数据应该跟着变', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper,'input');
  input.setValue('genal')
  const inputValue = wrapper.vm.$data.inputValue;
  expect(inputValue).toBe('genal');
})

it('Header 中 input 框输入回车无内容时无反应', async () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper,'input');
  await input.setValue('')
  input.trigger('keyup.enter');
  expect(wrapper.emitted().add).toBeFalsy();
})

it('Header 中 input 框 如果有内容时向外触发事件', async () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper,'input');
  await input.setValue('1234')
  input.trigger('keyup.enter');
  expect(wrapper.emitted().add).toBeTruthy();
})


it('Header 中 input 框 如果有内容时向外触发事件, 同时清空inputValue', async () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper,'input');
  await input.setValue('1234')
  input.trigger('keyup.enter');
  expect(wrapper.emitted().add).toBeTruthy();
  expect(wrapper.vm.$data.inputValue).toBe('')
})