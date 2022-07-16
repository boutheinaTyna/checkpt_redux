import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./redux-toolkit/taskSlice";

const AddTask = () => {
    const dispatch = useDispatch();

    const [task, setTask] = useState({});

  const handleChange = (e) => {
    setTask({
      id: Math.random(),
      [e.target.name]: e.target.value,
      isDone: false
    });
  };
  const handleClick = () => {
    dispatch(addTask(task));
  };

  return (
    <div className="add-task" style={{ border: "1px solid" }}>
      <h5>AddTask</h5>
      <input type="text" name="description" onChange={handleChange} />
      <button className="task-button" onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default AddTask;
 