import React from 'react'

import Grid from "@mui/material/Grid";
import './Landingpage.css'

const Landingpage = () => {
  return (
    <>
      <Grid container spacing={2} className="imageOne">
        <Grid item md={8} xs={12} sm={6} >
          <h2 style={{color:"white",paddingLeft:"2rem"}}>Fast,Simple and better built <br/>Project Management application</h2>
        </Grid>
        <Grid item md={4} sm={6}>
          <img src="" alt="" />
        </Grid>
      </Grid>
    </>
  );
}

export default Landingpage