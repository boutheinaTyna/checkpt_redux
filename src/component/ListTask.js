import React, {useState} from 'react';
import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from "./redux-toolkit/taskSlice";

const ListTask = () => {
    const { tasksList } = useSelector((state) => state.task);
    const dispatch = useDispatch();
    const [isEditing, setEditing] = useState(false);
    const [taskState, setTaskState] = useState({
      id: "",
      description: ""
    });
  
    const editTogle = (id, description) => {
      setEditing(true);
      setTaskState({ ...taskState, id, description });
    };
  
    const handleChange = (e) => {
      setTaskState({ ...taskState, [e.target.name]: e.target.value });
    };
    const { id, description } = taskState;
  const edit = () => {
    if (taskState.description === "") {
      setTaskState({ taskState });
    }
    dispatch(editTask({ id, description }));
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <h4>update your task:</h4>
          <input
            type="text"
            value={taskState.description}
            name="description"
            onChange={handleChange}
          ></input>
          <button onClick={edit}>edit</button>
        </div>
      ) : (
        <div>
          {tasksList.map((t) => (
            <Task
              id={t.id}
              description={t.description}
              isDone={t.isDone}
              editTogle={editTogle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListTask;