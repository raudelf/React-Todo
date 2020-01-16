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
  };

  render() {
    console.log("Rendering...");
    return (
      <form onSubmit={this.submitTask}>
        <input onChange={this.renderChanges} type="text" name="task" />
        <button className="add btn">Add</button>
      </form>
    );
  }
}

export default TodoForm;
