import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosConfig";

export const createProject = createAsyncThunk(
  "user/createProject",
  async (data, { rejectWithValue }) => {
    try {
      const create = await api.post("/createProject", data);
      console.log(create,"create")
      return create
    } catch (error) {
        if(error.response && error.response.data.message){
            return rejectWithValue(error.response.data.message)
        }
    }
  }
);

export const joinProject = createAsyncThunk(
  "user/joinProject",
  async(data,{rejectWithValue})=>{
    try {
    
       const join = await api.post("/joinProject", data);
       return join
      
    } catch (error) {
      
    }
     
    
  }
)
