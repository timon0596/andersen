import React from 'react'
import ReactDom from 'react-dom'
import {CreateTodo} from './elements/create-todo/create-todo.js'
import {Todo} from './elements/todo/todo.js'
require.context('./',true,/.css$/)
class App extends React.Component {
  state = {
    todos: []
  }
  constructor(){
    super()
    this.updateState=this.updateState.bind(this)
    this.addItem=this.addItem.bind(this)
    this.removeItem=this.removeItem.bind(this)
    this.up=this.up.bind(this)
    this.down=this.down.bind(this)
    this.done=this.done.bind(this)
  }

  addItem(item){
    this.state.todos.push(item)
    localStorage.setItem('state',JSON.stringify(this.state.todos))
    this.updateState()
  }

  removeItem(index){
   this.state.todos.splice(index,1)
   localStorage.setItem('state',JSON.stringify(this.state.todos))
   this.updateState()
  }

  updateState(){
    const state = localStorage.getItem('state')
    const todos = state?JSON.parse(state):[]
    this.setState({todos})
  }
  up(index){
    if(index-1<0){return}
    [this.state.todos[index],this.state.todos[index-1]]=[this.state.todos[index-1],this.state.todos[index]]
    localStorage.setItem('state',JSON.stringify(this.state.todos))
    this.updateState()
  }
  down(index){
    if(!this.state.todos[index+1]){return}
    [this.state.todos[index],this.state.todos[index+1]]=[this.state.todos[index+1],this.state.todos[index]]
    localStorage.setItem('state',JSON.stringify(this.state.todos))
    this.updateState()
  }
  done(index){
    this.state.todos[index].done=true
    localStorage.setItem('state',JSON.stringify(this.state.todos))
    this.updateState()
  }
  componentDidMount(){
    this.updateState()
  }

  render(){return (
    <>
      <CreateTodo addItem={this.addItem}/>
      <div className="todo-list">
        {
          this.state.todos.map((el,i) =><Todo 
            name={el.name}
            description={el.description}
            key={String(el.key)}
            index={i}
            removeItem={this.removeItem}
            up={this.up}
            down={this.down}
            done={this.done}
            isDone={el.done}
            />)
        }
      </div>
    </>  
   );
  }
}
ReactDom.render(<App/>,document.querySelector('.root'))