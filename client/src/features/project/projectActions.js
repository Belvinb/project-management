import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosConfig";

export const createProject = createAsyncThunk(
  "user/createProject",
  async (data, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await api.post("/createProject", data, config);
    } catch (error) {
        if(error.response && error.response.data.message){
            return rejectWithValue(error.response.data.message)
        }
    }
  }
);
