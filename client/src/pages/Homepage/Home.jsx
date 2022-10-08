import React from "react";
import Grid from "@mui/material/Grid";
import "./Home.css";
import CreateProject from "../../components/HomePageComponent/CreateProject";
import JoinProject from "../../components/HomePageComponent/JoinProject";
import ViewProject from "../../components/HomePageComponent/ViewProject";



const Home = () => {
  let user = JSON.parse(localStorage.getItem("userToken"));

  return (
    <>
      {/* first row */}
      <Grid container className="newProject">
        {/* col section one */}
        <JoinProject />
        {/* col section 2 */}
        {user.premium ? <CreateProject /> : ""}
      </Grid>
      {/* 2nd row table */}
      <hr />
      <Grid container  className="projectTable">
      <ViewProject/>
      </Grid>
    </>
  );
};

export default Home;
