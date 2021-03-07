import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/hello world/i);
  // expect(linkElement).toBeInTheDocument();

  const wrapper = shallow(<App />)
  // 用专属的自定义属性去提供测试使用，不要用类名
  expect(wrapper.find('[data-test="container"]').length).toBe(1)
  // expect(wrapper.find('[data-test="container"]')).toExit()
  
  // console.log(wrapper.debug())
  expect(wrapper.find('[data-test="container"]').prop('title')).toBe('genal')
});
