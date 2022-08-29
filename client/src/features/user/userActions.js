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
      console.log(data)
      localStorage.setItem('userToken',data.token)
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

