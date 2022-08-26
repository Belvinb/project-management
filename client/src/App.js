import React,{Suspense} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from './components/loader/Loader';
const Landingpage = React.lazy(()=>import('./pages/Landingpage/Landingpage'))
const Login = React.lazy(()=>import('./pages/Loginpage/Login'))
const Header = React.lazy(()=>import('./components/Header/Header'))
const Signup = React.lazy(()=>import(('./pages/Signuppage/Signup')))
const Plans = React.lazy(()=>import (('./pages/Planselection/Plans')))

function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route element={<Header/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path = '/signup' element={<Signup/>}/>
            <Route path = '/plans' element={<Plans/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
