import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

export default function App() {
  const [tasks, setTasks] = React.useState([]);

  function inputTask(e) {
    console.log(tasks);
    let text = document.querySelector("input").value;
    setTasks((prevTasks) => [
      ...prevTasks,
      { task: text, id: uniqid(), completed: false },
    ]);
    e.preventDefault();
  }

  function changeStatus(e) {
    // setTasks((prevTask) => ({
    //   ...prevTask,
    //   completed: !prevTask.completed,
    // }));
    // setTasks((prevTask) => (prevTask.completed = !prevTask.completed));
    // e.preventDefault();
    // console.log(tasks);
    // let task = tasks.task;
    // task.completed = true;
    console.log("clicked");
  }

  return (
    <div>
      <form>
        <label>
          Enter list item:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" onClick={inputTask} />
      </form>
      <Overview tasks={tasks} handleChange={changeStatus} />
    </div>
  );
}
