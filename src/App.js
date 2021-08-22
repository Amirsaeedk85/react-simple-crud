import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (addTask !== "" && addTask !== " ") {
      setTasks([...tasks, { id: Date.now(), text: addTask }]);

      toast.success("Task added", {
        position: "top-right",
        closeButton: true,
        closeOnClick: true,
      });
      setAddTask("")
    }
  };

  return (
    <>
      {console.log(addTask)}
      {console.log(tasks)}
      <div className="d-flex justify-content-center align-items-center">
        <div className="todo d-flex flex-column align-items-center">
          <h1 className="mt-5">Todo App</h1>
          <form>
            <input
              type="text"
              placeholder="Add your task"
              onChange={(e) => setAddTask(e.target.value)}
              value={addTask}
            />
            <button type="submit" onClick={addTodoHandler}>
              Add
            </button>
            <ToastContainer />
          </form>
          <div className="tasks w-100">
            {tasks.map((item) => (
              <div className="task w-75">
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
