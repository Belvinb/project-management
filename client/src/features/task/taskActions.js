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

