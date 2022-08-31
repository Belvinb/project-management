import {createSlice} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
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
    reducers : {
        logout :(state)=>{
            localStorage.removeItem('userToken')
            state.loading = false
            state.userInfo = null
            state.userToken = null
            state.error = null
        }
    },
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
export const { logout } = userSlice.actions;
export default userSlice.reducer