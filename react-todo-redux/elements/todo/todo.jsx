import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkAsDoneWithTimeout } from '../../actions/asyncFunctions';
import { CHECK_AS_DONE, MOVE_DOWN, MOVE_UP, REMOVE } from '../../store/types';

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
        {isDone && <div className="todo__is-done">&#10004;&#65039;</div>}
        <div className="todo__order-buttons">
          <div
            className="todo__up-button"
            onClick={() => {
              dispatch({ type: MOVE_UP, index });
            }}
          >
            up
          </div>
          <div
            className="todo__down-button"
            onClick={() => {
              dispatch({ type: MOVE_DOWN, index });
            }}
          >
            down
          </div>
        </div>
        <div className="todo__name">{name}</div>
        <div className="todo__description">{description}</div>
        <div className="todo__buttons">
          <div
            className={classes}
            onClick={() => {
              dispatchChecking({ type: CHECK_AS_DONE, index });
            }}
          >
            done
          </div>
          <div
            className="todo__button-delete"
            onClick={() => {
              dispatch({ type: REMOVE, index });
            }}
          >
            delete
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, (dispatch) => ({
  dispatchChecking: (action) => {
    dispatch(checkAsDoneWithTimeout(action));
  },
  dispatch,
}))(Todo);
