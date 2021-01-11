import { GET_TODOS } from '../types';

export const getTodosFromLocalStorage = () => (dispatch) => {
  let todos = localStorage.getItem('todos');
  todos = todos ? JSON.parse(todos) : [];
  dispatch({ type: GET_TODOS, todosFromLocalStorage: todos });
};