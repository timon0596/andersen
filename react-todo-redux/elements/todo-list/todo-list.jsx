import React, { Component, memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useQuery, gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { getTodosFromLocalStorage } from '../../store/actions/actions';
import Todo from '../todo/todo';

const TodoList = memo((props) => {
  useEffect(() => {
    // const queryResult = useQuery(EXCHANGE_RATES);
    const { getTodos } = props;
    getTodos();
  }, []);

  const {
    todos,
    data: { movie },
  } = props;
  console.log(movie);

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
});
const myMomponent = connect(
  (state) => ({ todos: state.todos }),
  (dispatch) => ({
    getTodos: () => {
      dispatch(getTodosFromLocalStorage());
    },
  })
)(TodoList);
const EXCHANGE_RATES = gql`
  {
    movie(id: 1) {
      name
      year
    }
  }
`;

export default graphql(EXCHANGE_RATES)(myMomponent);
