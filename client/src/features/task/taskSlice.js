import { createSlice } from "@reduxjs/toolkit";
import { createTaskAction, changeTaskStatus } from "./taskActions";

const initialState = {
    loading:false,
    taskDetails :{},
    error : null ,
    success : false
}

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: {
    [createTaskAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [createTaskAction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.taskDetails = payload;
    },
    [createTaskAction.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    [changeTaskStatus.pending]:(state) => {
      state.loading = true;
      state.error = null
    },
    [changeTaskStatus.fulfilled] : (state,{payload}) => {
      state.loading = false;
      state.taskDetails = payload
    },
    [changeTaskStatus.rejected] : (state) => {
      state.loading = false;
    }
  },
});

export default taskSlice.reducer;