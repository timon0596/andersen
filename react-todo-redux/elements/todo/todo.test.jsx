import React from 'react';
import { shallow } from 'enzyme';
import { Todo } from './todo';
describe('todo single element', () => {
  let simpleTodo;
  const up = jest.fn();
  const down = jest.fn();
  const done = jest.fn();
  const removeItem = jest.fn();
  const props = {
    name: 'qqqq',
    description: 'www',
    up,
    down,
    done,
    removeItem,
    isDone: false,
  };
  beforeEach(() => {
    simpleTodo = shallow(<Todo {...props} />);
  });
  it('todo markup', () => {
    expect(simpleTodo.find('.todo').length).toBe(1);
  });
  it('up callback', () => {
    simpleTodo.find('.todo__up-button').simulate('click');
    expect(up).toBeCalled();
  });
  it('down callback', () => {
    simpleTodo.find('.todo__down-button').simulate('click');
    expect(down).toBeCalled();
  });
  it('done callback', () => {
    simpleTodo.find('.todo__button-done').simulate('click');
    expect(done).toBeCalled();
    simpleTodo.setProps({ isDone: true });
    expect(simpleTodo.find('.todo__is-done').length).toBe(1);
  });
  it('removeItem callback', () => {
    simpleTodo.find('.todo__button-delete').simulate('click');
    expect(removeItem).toBeCalled();
  });
});
