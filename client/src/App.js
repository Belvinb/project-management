import React,{Suspense} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Landingpage = React.lazy(()=>import('./pages/Landingpage/Landingpage'))
const Login = React.lazy(()=>import('./pages/Loginpage/Login'))
const Header = React.lazy(()=>import('./components/Header/Header'))
const Signup = React.lazy(()=>import(('./pages/Signuppage/Signup')))

function App() {
  return (
    <Suspense fallback={<div>loading..</div>}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route element={<Header/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path = '/signup' element={<Signup/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
