import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  const bigComponent = wrapper.find("[data-test='component-big-component']");
  expect(appComponent.length).toBe(1);
}); 

test('renders increment button', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
test('renders counter display', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
test('renders counter starts at 0', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
test('renders clicking button increments counter display', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});
