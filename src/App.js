import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todo = [
  {
    todo: "Clean",
    id: 123,
    completed: false
  },
  {
    todo: "Shopping",
    id: 124,
    completed: false
  },
  {
    todo: "Homework",
    id: 125,
    completed: false
  },
  {
    todo: "Meditate",
    id: 126,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: todo
    };
  }

  addNewTask = newTask => {
    const newState = {
      ...this.state,
      task: [
        ...this.state.task,
        { todo: newTask, id: Date.now(), completed: false }
      ]
    };
    this.setState(newState);
  };

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      task: this.state.task.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      task: this.state.task.filter(task => {
        return !task.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List App</h2>
          <p>Add a task to your list below</p>
          <TodoForm addNewTask={this.addNewTask} />
        </div>
        <TodoList
          todos={this.state.task}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
