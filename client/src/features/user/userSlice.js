import {createSlice} from '@reduxjs/toolkit'
import { registerUser,userLogin } from './userActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
    loading:false,
    userInfo:null,
    userToken,
    error:null,
    sucess:false,
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {},
    extraReducers : {
        [userLogin.pending]:(state)=>{
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [userLogin.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
        },
        [registerUser.pending]:(state)=>{
            state.loading = true
            state.error = null
        },
        [registerUser.fulfilled]:(state,{payload})=>{
            state.loading = false
            state.success = true
        },
        [registerUser.rejected]:(state,{payload})=>{
            state.loading = false
            state.error = payload
        }
    }

})

export default userSlice.reducer