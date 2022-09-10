
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axiosConfig";

export const registerUser = createAsyncThunk(
  "/registerUser",
  async ({ name, email, phone, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await api.post(
        "/signup",
        { name, email, phone, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);

//user login

export const userLogin = createAsyncThunk(
  '/login',
  async({email,password},{rejectWithValue})=>{
    try{
      const config = {
        headers:{
          'Content-Type': 'application/json',
        }
      }
      const {data} = await api.post(
        "/login",
        {email,password},
        config
      )
      console.log(data);
      localStorage.setItem('userToken',JSON.stringify(data))
      return data
    }catch (error){
      if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message)
      }else{
        return rejectWithValue(error.message)
      }
    }
  }
)



export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState();
     

      // configure authorization header with user's token
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };
      const { data } = await api.get(`/profile`, config);
      
      console.log(data)
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

