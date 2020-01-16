import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  renderChanges = e => {
    this.setState({ ...this.state, newTask: e.target.value });
  };

  submitTask = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({newTask: ''})
  };

  render() {
    console.log("Rendering...");
    return (
      <form onSubmit={this.submitTask}>
        <input value={this.state.newTask} onChange={this.renderChanges} type="text" name="task" />
        <button className="add btn">Add</button>
      </form>
    );
  }
}

export default TodoForm;
