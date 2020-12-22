import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props){
    super(props)
    this.handleDeleteClick=this.handleDeleteClick.bind(this)
    this.handleDoneClick=this.handleDoneClick.bind(this)
    this.state = {done: !!this.props.done}
    console.log(this.state)
  }

  handleDeleteClick(){
    localStorage.removeItem(this.props.id)
    this.props.updateState()
  }
  handleDoneClick(){
    if(this.props.done){
      return
    }
    const {name,description,id} = this.props
    localStorage.setItem(id,JSON.stringify({name,description,isDone:true}))
    this.setState({done: true})

  }
  
  render () {
    const isDone = this.state.done||this.props.done?<div className="todo__is-done">&#10004;&#65039;</div>:false
    const classes = `todo__button-done ${this.state.done?'todo__button-done_disabled':''}`
    return (
        <div className="todo">
          {isDone}
          <div className="todo__name">{this.props.name}</div>
          <div className="todo__description">{this.props.description}</div>
          <div className="todo__buttons">
            <div className={classes} 
              onClick={this.handleDoneClick}
            >done</div>
            <div className="todo__button-delete" onClick={this.handleDeleteClick}>delete</div>
          </div>
        </div>
    );
  }
}
