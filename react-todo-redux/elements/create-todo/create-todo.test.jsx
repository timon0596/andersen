import React from 'react';
import { mount, } from 'enzyme';
import { CreateTodo } from './create-todo';
describe('create-todo',() =>{
  const addItem = jest.fn()
  const wrapper = mount(<CreateTodo addItem={addItem} />);
  const { inputRef } = wrapper.instance();
  it("Gives immediate focus on to name field on load", () => {
    jest.spyOn(inputRef.current, "focus");
    wrapper.instance().componentDidMount();
    expect(inputRef.current.focus).toHaveBeenCalledTimes(1);
});
  it('state changes on input',() =>{
    wrapper.instance().handleNameChange({ target: { value: 'Hello' ,name: 'name'} })
    expect(wrapper.state().name).toBe('Hello')
  })
  it('addItem is called on create-todo__button click',() =>{
    wrapper.find('.create-todo__button').simulate('click')
    expect(addItem).toBeCalled()
  })
})