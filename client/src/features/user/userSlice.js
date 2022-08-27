import {createSlice} from '@reduxjs/toolkit'
import { registerUser } from './userActions'

const initialState = {
    loading:false,
    userInfo:{},
    userToken:null,
    error:null,
    sucess:false,
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {},
    extraReducers : {
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