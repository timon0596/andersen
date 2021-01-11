import React from 'react';
import { connect } from 'react-redux';
import { ADD } from '../../store/types';
import { CREATE_BUTTON, TASK_DESCRIPTION, TASK_NAME } from './create-todo.dict';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', description: '' };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleNameChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  create = () => {
    const { dispatch } = this.props;
    const { name } = this.state;
    if (!name.trim()) {
      return;
    }
    dispatch({
      type: ADD,
      payload: { ...this.state, key: Date.now(), isDone: false },
    });
  };

  render() {
    return (
      <div className="create-todo">
        <div className="create-todo__name">{TASK_NAME}</div>
        <input
          ref={this.inputRef}
          className="create-todo__name-input"
          name="name"
          onChange={this.handleNameChange}
        />
        <div className="create-todo__description-label">{TASK_DESCRIPTION}</div>
        <textarea
          className="create-todo__description"
          name="description"
          onChange={this.handleNameChange}
        />
        <div className="create-todo__button" onClick={this.create}>
          {CREATE_BUTTON}
        </div>
      </div>
    );
  }
}
export default connect(null)(CreateTodo);
