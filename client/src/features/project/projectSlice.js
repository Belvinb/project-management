import { createSlice } from "@reduxjs/toolkit";
import {createProject} from './projectActions'

const initialState = {
    loading:false,
    projectDetails:{},
    error:null,
    success:false
}

const projectSlice = createSlice({
    name:"projects",
    initialState,
    reducers:{},
    extraReducers:{
        [createProject.pending] : (state) =>{
            state.loading = true;
            state.error = null;
        },
        [createProject.fulfilled] : (state,{payload}) =>{
            state.loading = false;
            state.projectDetails = payload;

        },
        [createProject.rejected] : (state,{payload}) =>{
            state.loading = false;
            state.error = payload
        }
    }
})


export default projectSlice.reducer;