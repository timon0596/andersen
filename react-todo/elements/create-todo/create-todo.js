import React from 'react';

export class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', description: '', key: Date.now(), done: false,
    };
    this.create = this.create.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.inputRef = React.createRef();
  }

  create() {
    if (!this.state.name.trim()) { return; }
    this.setState({ key: Date.now() }, this.props.addItem({ ...this.state }));
  }

  handleNameChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className="create-todo">
        <div className="create-todo__name">task name</div>
        <input ref={this.inputRef} className="create-todo__name-input" name="name" onChange={this.handleNameChange} />
        <div className="create-todo__description-label">task description</div>
        <textarea className="create-todo__description" name="description" onChange={this.handleNameChange} />
        <div className="create-todo__button" onClick={this.create}>create</div>
      </div>
    );
  }
}
