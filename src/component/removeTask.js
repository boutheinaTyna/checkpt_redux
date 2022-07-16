import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";

const removeTask = ({ id, description }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id

			})
		)
	}

	return (
		<li className="task-item">
			<div>
				{description}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
		</li>
	);
};

export default removeTask;