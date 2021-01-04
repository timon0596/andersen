import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../todo/todo';

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="todo-list">
        {todos.map((el, i) => (
          <Todo
            name={el.name}
            description={el.description}
            key={String(el.key)}
            index={i}
            isDone={el.isDone}
          />
        ))}
      </div>
    );
  }
}
export default connect((state) => ({ todos: state.todos }), null)(TodoList);
