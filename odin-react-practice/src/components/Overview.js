import React from "react";

export default function Overview(props) {
  console.log(props);

  return (
    <ul>
      {props.tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.task}
            <button onClick={props.handleChange}>
              {task.completed ? "Completed" : "Complete"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
