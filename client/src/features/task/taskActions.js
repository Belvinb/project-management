import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosConfig";

export const createTaskAction = createAsyncThunk(
    "user/createTask",
    async(data,{rejectWithValue})=>{
        try {
            const config = {
              headers: {
                "Content-Type": "application/json",
              }, 
            };
            const task = await api.post("/createTask",data,config)
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
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            const changeStatus = await api.post("/changeTaskStatus",data,config)
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
      const config = {
        headers:{
          "Content-Type" : "application/json"
        },
      }
      const comment = await api.post("/addComment",data,config)
      console.log(comment,"comment data from backend")
      return comment.data
      
    } catch (error) {
      if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message)
      }
    }
  }
)






