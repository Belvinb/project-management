import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "/registerUser",
  async ({ name, email, phone, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "http://127.0.0.1:5000/signup",
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
      const {data} = await axios.post(
        "http://127.0.0.1:5000/login",
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
      const { data } = await axios.get(`http://127.0.0.1:5000/profile`, config);
      
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

