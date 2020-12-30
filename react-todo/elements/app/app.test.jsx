import React from 'react';
import { mount,shallow} from 'enzyme';
import { App } from './app';

describe('app',() =>{
  const wrapper = mount(<App />);
  const instance = wrapper.instance();
  instance.updateState = jest.fn(() =>{
    wrapper.setState({todos: [{key:1},{key:2},{key:3}]})
  })
  const oldUp = instance.up
  const oldDown = instance.down
  const oldDone = instance.done
  const {addItem} = instance
  const {removeItem} = instance
  instance.up = jest.fn((index) =>{
    oldUp(index)
  })
  instance.removeItem = jest.fn((item) =>{
    removeItem(item)
  })
  instance.done = jest.fn((index) =>{
    oldDone(index)
  })
  instance.down = jest.fn((index) =>{
    oldDown(index)
  })
  it("did mount", () => {
    jest.spyOn(instance, "updateState");
    instance.componentDidMount();
    expect(instance.updateState).toHaveBeenCalledTimes(1);
  });
  it('click up',() =>{
    jest.spyOn(instance, "up");
    wrapper.find('.todo__up-button').at(1).simulate('click')
    expect(instance.up).toBeCalled()
  })
  it('click down',() =>{
    jest.spyOn(instance, "down");
    wrapper.find('.todo__down-button').first().simulate('click')
    expect(instance.down).toBeCalled()
  })
  it('click done',() =>{
    jest.spyOn(instance, "done");
    wrapper.find('.todo__button-done').first().simulate('click')
    expect(instance.done).toBeCalled()
  })
  it('click removeItem',() =>{
    jest.spyOn(instance, "removeItem");
    wrapper.find('.todo__button-delete').first().simulate('click')
    expect(instance.removeItem).toBeCalled()
  })
})