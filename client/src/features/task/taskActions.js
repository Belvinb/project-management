import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosConfig";

export const createTaskAction = createAsyncThunk(
    "user/createTask",
    async(data,{rejectWithValue})=>{
        try {
            const task = await api.post("/createTask",data)
            console.log(task)
            return task.data
            
        } catch (error) {
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }
        }
    }
)

export const changeTaskStatus = createAsyncThunk(
    "user/changeTaskStatus",
    async(data,{rejectWithValue})=>{
        try {
            const changeStatus = await api.post("/changeTaskStatus",data)
            console.log(changeStatus);
            return changeStatus.data;

            
        } catch (error) {
             if (error.response && error.response.data.message) {
               return rejectWithValue(error.response.data.message);
             }
            
        }
    }
)

export const addComment = createAsyncThunk(
  "user/addComment",
  async(data,{rejectWithValue})=>{
    try {
      const comment = await api.post("/addComment",data)
      console.log(comment,"comment data from backend")
      return comment.data
      
    } catch (error) {
      if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message)

      }
    }
  }
)

export const createSubTask = createAsyncThunk(
  "user/createSubTask",
  async(data,{rejectWithValue})=>{
    try {
      const subTask = await api.post("/createSubTasks", data);
      console.log(subTask,"subtask")
      return subTask.data
    } catch (error) {
      if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message)
      }
    }
  }
)






