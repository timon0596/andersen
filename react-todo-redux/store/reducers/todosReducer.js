import {
  ADD,
  MOVE_DOWN,
  MOVE_UP,
  REMOVE,
  CHECK_AS_DONE,
  GET_TODOS,
} from '../types';

export default (state = [], action) => {
  const { type, payload, index, todosFromLocalStorage } = action;

  switch (type) {
    case GET_TODOS: {
      return todosFromLocalStorage;
    }

    case ADD: {
      const todos = [...state, payload];
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

    case REMOVE: {
      const todos = [...state];
      todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

    case MOVE_UP: {
      if (index - 1 < 0) {
        return state;
      }
      const todos = [...state];
      [todos[index], todos[index - 1]] = [todos[index - 1], todos[index]];
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

    case MOVE_DOWN: {
      if (!state[index + 1]) {
        return state;
      }
      const todos = [...state];
      [todos[index], todos[index + 1]] = [todos[index + 1], todos[index]];
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

    case CHECK_AS_DONE: {
      const todos = [...state];
      todos[index].isDone = true;
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

    default: {
      return state;
    }
  }
};
