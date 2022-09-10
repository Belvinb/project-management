import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import projectReducer from '../features/project/projectSlice'



const store = configureStore({
    reducer :{
        user : userReducer,
        project : projectReducer,
    }
})

export default store