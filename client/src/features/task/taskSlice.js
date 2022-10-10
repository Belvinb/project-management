import { createSlice } from "@reduxjs/toolkit";
import { createTaskAction, changeTaskStatus,addComment } from "./taskActions";

const initialState = {
    loading:false,
    taskDetails :{},
    singleTask : {},
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
    },
    [addComment.pending]:(state)=>{
      state.loading = true;
      state.error = null;
    },
    [addComment.fulfilled] : (state,{payload})=>{
      state.loading = false;
      state.singleTask = payload
    },
    [addComment.rejected] : (state)=>{
      state.loading = false
    }
  },
});

export default taskSlice.reducer;