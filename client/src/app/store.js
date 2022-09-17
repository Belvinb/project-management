import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import projectReducer from '../features/project/projectSlice'
import taskReducer from '../features/task/taskSlice'



const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    task: taskReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store