import React from 'react';
import { Provider, connect } from 'react-redux';
import { store } from '../../store/store';
import CreateTodo from '../create-todo/create-todo';
import Stats from '../stats/stats';
import TodoList from '../todo-list/todo-list';

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CreateTodo />
        <Stats />
        <TodoList />
      </Provider>
    );
  }
}
