import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props){
    super(props)
    this.handleDoneClick=this.handleDoneClick.bind(this)
    this.state = {done: !!this.props.done}
  }

  handleDoneClick(){
    if(this.props.done){
      return
    }

  }
  
  render () {
    const isDone = this.state.done||this.props.done?<div className="todo__is-done">&#10004;&#65039;</div>:false
    const classes = `todo__button-done ${this.state.done?'todo__button-done_disabled':''}`
    return (
        <div className="todo">
          {isDone}
          <div className="todo__order-buttons">
            <div className="" onClick={() =>{this.props.up(this.props.index)}}>up</div>
            <div className="" onClick={() =>{this.props.down(this.props.index)}}>down</div>
          </div>
          <div className="todo__name">{this.props.name}</div>
          <div className="todo__description">{this.props.description}</div>
          <div className="todo__buttons">
            <div className={classes} 
              onClick={this.handleDoneClick}
            >done</div>
            <div className="todo__button-delete" onClick={() =>{this.props.removeItem(this.props.index)}}>delete</div>
          </div>
        </div>
    );
  }
}
