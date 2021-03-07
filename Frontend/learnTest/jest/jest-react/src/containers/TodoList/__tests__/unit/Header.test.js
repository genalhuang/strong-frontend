import { shallow } from 'enzyme';
import Header from '../../components/Header'


it('Header组件包含input框', () => {
  const wrapper = shallow(<Header></Header>)
  const inputElem = wrapper.find('[data-test="input"]')
  expect(inputElem.length).toBe(1)
})

it('Header组件input框内容，初始化内容为空', () => {
  const wrapper = shallow(<Header></Header>)
  const inputElem = wrapper.find('[data-test="input"]')
  expect(inputElem.prop('value')).toEqual('')
})

it('Header组件input框内容，当用户输入时， 会跟随变化', () => {
  const wrapper = shallow(<Header></Header>)
  const inputElem = wrapper.find('[data-test="input"]')
  const userInput = '今天要学习 jest'
  inputElem.simulate('change', {
    target: { value: userInput }
  })
  expect(wrapper.state('value')).toEqual(userInput)

  const newInputElem =  wrapper.find('[data-test="input"]')
  expect(newInputElem.prop('value')).toBe(userInput)
})

it('header组件input框输入回车时，如果input无内容，无操作', ()=>{
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} ></Header>)
  const inputElem = wrapper.find('[data-test="input"]')
  wrapper.setState({
    value: ''
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  });
  expect(fn).not.toHaveBeenCalled()
})

it('header组件input框输入回车时，如果input有内容，函数应该被调用', ()=>{
  const fn = jest.fn()
  const wrapper = shallow(<Header addUndoItem={fn} ></Header>)
  const inputElem = wrapper.find('[data-test="input"]')
  wrapper.setState({
    value: '学习 react'
  })
  inputElem.simulate('keyUp', {
    keyCode: 13
  });
  expect(fn).toHaveBeenCalled()
  expect(fn).toHaveBeenLastCalledWith('学习 react')
})