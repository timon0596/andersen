import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAsDoneWithTimeout } from '../../store/actions/asyncFunctions';
import { CHECK_AS_DONE, MOVE_DOWN, MOVE_UP, REMOVE } from '../../store/types';
import { DONE_EMOJI, TODOS_BUTTONS_NAMES } from './todos.dict';

const { up, down, done, deleteButton } = TODOS_BUTTONS_NAMES;
class Todo extends Component {
  render() {
    const {
      isDone,
      name,
      description,
      index,
      dispatchChecking,
      dispatch,
    } = this.props;
    const classes = `todo__button-done ${
      isDone ? 'todo__button-done_disabled' : ''
    }`;
    return (
      <div className="todo">
        {isDone && <div className="todo__is-done">{DONE_EMOJI}</div>}
        <div className="todo__order-buttons">
          <div
            className="todo__up-button"
            onClick={() => {
              dispatch({ type: MOVE_UP, index });
            }}
          >
            {up}
          </div>
          <div
            className="todo__down-button"
            onClick={() => {
              dispatch({ type: MOVE_DOWN, index });
            }}
          >
            {down}
          </div>
        </div>
        <div className="todo__name">{name}</div>
        <div className="todo__description">{description}</div>
        <div className="todo__buttons">
          <div
            className={classes}
            onClick={() => {
              dispatchChecking({ type: CHECK_AS_DONE, index }, isDone);
            }}
          >
            {done}
          </div>
          <div
            className="todo__button-delete"
            onClick={() => {
              dispatch({ type: REMOVE, index });
            }}
          >
            {deleteButton}
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, (dispatch) => ({
  dispatchChecking: (action, isDone) => {
    if (isDone) return;
    dispatch(checkAsDoneWithTimeout(action));
  },
  dispatch,
}))(Todo);
