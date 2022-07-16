import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    tasksList: [
      {
        id: Math.random(),
        description: "task 1",
        isDone: false
      }
    ]
  };

  export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
      addTask: (state, action) => {
        state.tasksList = [...state.tasksList, action.payload];
      },
      editTask: (state, action) => {
        let { tasksList } = state;
        state.tasksList = tasksList.map((oldTask) =>
          oldTask.id === action.payload.id
            ? { ...action.payload, isDone: !action.payload.isDone }
            : oldTask
        );
      }
    }
  });
  export const { addTask, editTask } = taskSlice.actions;
  export default taskSlice.reducer;
  
  