import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery, gql } from '@apollo/client';
import { getTodosFromLocalStorage } from '../../store/actions/actions';
import Todo from '../todo/todo';

const TodoList = (props) => {
  useEffect(() => {
    // const EXCHANGE_RATES = gql`
    //   query Query {
    //     movie(id: 1) {
    //       name
    //       year
    //     }
    //   }
    // `;
    // const queryResult = useQuery(EXCHANGE_RATES);
    // console.log(queryResult);
    const { getTodos } = props;
    getTodos();
  }, []);

  const { todos } = props;

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
};
export default connect(
  (state) => ({ todos: state.todos }),
  (dispatch) => ({
    getTodos: () => {
      dispatch(getTodosFromLocalStorage());
    },
  })
)(TodoList);
