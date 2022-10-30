import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader/Loader";
import ErrorBoundary from "./ErrorBoundary";
import ErrorPage from "./pages/ErrorPage";
const Landingpage = React.lazy(() => import("./pages/Landingpage/Landingpage"));
const Login = React.lazy(() => import("./pages/Loginpage/Login"));
const Header = React.lazy(() => import("./components/Header/Header"));
const Signup = React.lazy(() => import("./pages/Signuppage/Signup"));
const Plans = React.lazy(() => import("./pages/Planselection/Plans"));
const Home = React.lazy(() => import("./pages/Homepage/Home"));
const ProtectedRoute = React.lazy(() => import("./routing/ProtectedRoute"));
const Project = React.lazy(()=> import("./pages/projectDetails/Project"))
const Workflow = React.lazy(()=>import("./components/ProjectPageComponents/Workflow/Workflow"))
const ProjectTeam = React.lazy(()=>import("./components/ProjectPageComponents/Team/ProjectTeam"))
const AssignedTasks = React.lazy(()=>import("./components/ProjectPageComponents/AssignedTasks/AssignedTasks"))
const ChatBox = React.lazy(()=> import("./components/ProjectPageComponents/Chat/ChatBox"))
function App() {
  return (
    <ErrorBoundary>
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
            <Route element={<Project />}>
              <Route
                path="/project/workflow/:projectId"
                element={<Workflow />}
              />
              <Route
                path="/project/team/:projectId"
                element={<ProjectTeam />}
              />
              <Route
                path="/project/assignedTasks/:projectId"
                element={<AssignedTasks />}
              />
              <Route path="/project/chat/:projectId" element={<ChatBox />} />
            </Route>
            <Route  path = "*" element={<ErrorPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
