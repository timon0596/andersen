import React from 'react'
export class CreateTodo extends React.Component {
  constructor(props){
    super(props);
    this.updateTodoList = props.updateState
    this.state = {name:'',description:''}
    this.create=this.create.bind(this)
    this.handleNameChange=this.handleNameChange.bind(this)
  }
  create(){
    const dateKey=Date.now()
    if(!this.state.name.trim()){return}
    localStorage.setItem(`task_${dateKey}`,JSON.stringify(this.state))
    this.updateTodoList()

  }

  handleNameChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render(){
    return (
  <div className="create-todo">
    <div className="create-todo__name">task name</div>
    <input className="create-todo__name-input" name="name" onChange={this.handleNameChange}/>
    <div className="create-todo__description-label">task description</div>
    <textarea className="create-todo__description" name="description" onChange={this.handleNameChange}/>
    <div className="create-todo__button" onClick={this.create}>create</div>
  </div>
  );
  }
  }

