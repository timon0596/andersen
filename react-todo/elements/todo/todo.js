import React, { Component } from 'react';

export class Todo extends Component {
  constructor(props){
    super(props)
  }

  
  render () {
    const classes = `todo__button-done ${this.props.isDone?'todo__button-done_disabled':''}`
    return (
        <div className="todo">
          {this.props.isDone && <div className="todo__is-done">&#10004;&#65039;</div>}
          <div className="todo__order-buttons">
            <div className="" onClick={() =>{this.props.up(this.props.index)}}>up</div>
            <div className="" onClick={() =>{this.props.down(this.props.index)}}>down</div>
          </div>
          <div className="todo__name">{this.props.name}</div>
          <div className="todo__description">{this.props.description}</div>
          <div className="todo__buttons">
            <div className={classes} 
              onClick={() =>{this.props.done(this.props.index)}}
            >done</div>
            <div className="todo__button-delete" onClick={() =>{this.props.removeItem(this.props.index)}}>delete</div>
          </div>
        </div>
    );
  }
}
