import React from "react";

const Todo = props => {
  return (
    <div
      onClick={event => props.toggleCompleted(props.task.id)}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.todo}</p>
    </div>
  );
};

export default Todo;
