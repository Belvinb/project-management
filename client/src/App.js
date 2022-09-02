import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";
const Landingpage = React.lazy(() => import("./pages/Landingpage/Landingpage"));
const Login = React.lazy(() => import("./pages/Loginpage/Login"));
const Header = React.lazy(() => import("./components/Header/Header"));
const Signup = React.lazy(() => import("./pages/Signuppage/Signup"));
const Plans = React.lazy(() => import("./pages/Planselection/Plans"));
const Home = React.lazy(() => import("./pages/Homepage/Home"));
const ProtectedRoute = React.lazy(() => import("./routing/ProtectedRoute"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Landingpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/home" element={<Home />} />
            {/* </Route> */}
            <Route path="/plans" element={<Plans />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
