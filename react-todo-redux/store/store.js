import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ADD, MOVE_DOWN, MOVE_UP, REMOVE, CHECK_AS_DONE } from './types';

let initialState = localStorage.getItem('state');
initialState = initialState ? JSON.parse(initialState) : { todos: [] };
const reducer = (state = initialState, action) => {
  const { type, payload, index } = action;

  switch (type) {
    case ADD: {
      const todos = [...state.todos, payload];
      localStorage.setItem('state', JSON.stringify({ todos }));
      return {
        todos,
      };
    }

    case REMOVE: {
      const todos = [...state.todos];
      todos.splice(index, 1);
      localStorage.setItem('state', JSON.stringify({ todos }));
      return {
        todos,
      };
    }

    case MOVE_UP: {
      if (index - 1 < 0) {
        return state;
      }
      const todos = [...state.todos];
      [todos[index], todos[index - 1]] = [todos[index - 1], todos[index]];
      localStorage.setItem('state', JSON.stringify({ todos }));
      return {
        todos,
      };
    }

    case MOVE_DOWN: {
      if (!state.todos[index + 1]) {
        return state;
      }
      const todos = [...state.todos];
      [todos[index], todos[index + 1]] = [todos[index + 1], todos[index]];
      localStorage.setItem('state', JSON.stringify({ todos }));
      return {
        todos,
      };
    }

    case CHECK_AS_DONE: {
      const todos = [...state.todos];
      todos[index].isDone = true;
      return { todos };
    }

    default: {
      return state;
    }
  }
};
export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
