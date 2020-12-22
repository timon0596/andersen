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
  }
  updateState(){
    const todos = Array.from({length: localStorage.length}).map((el,i) => {
      const key = localStorage.key(i)
      return /^task_/.test(key)?{...JSON.parse(localStorage.getItem(key)),key}:0}).filter((el) =>el)
    this.setState({todos})
  }
  componentDidMount(){
    this.updateState()
  }

  render(){return (
    <>
      <CreateTodo updateState={this.updateState}/>
      <div className="todo-list">
        {
          this.state.todos.map((el,i) =><Todo 
            name={el.name}
            description={el.description}
            done={el.isDone}
            id={el.key}
            key={el.key}
            updateState={this.updateState}
            />)
        }
      </div>
    </>  
   );
  }
}
ReactDom.render(<App/>,document.querySelector('.root'))