import React from 'react';
import { shallow } from 'enzyme';
import {Todo} from './todo'
describe('test',() =>{
  it('simple todo',() =>{
    const props = {
      name: 'qqqq',
      description: 'www'
    }
    const simpleTodo = shallow(<Todo {...props}/>)
    expect(simpleTodo.find('.todo').length).toBe(1)
  })
})
