import React from 'react'

import Grid from "@mui/material/Grid";
import './Landingpage.css'


// const useStyles = makeStyles((theme) => ({
//   drawerWidth: {
//     width: "50%",
//     backgroundColor: "yellow",
//     [theme.breakpoints.up(780)]: {
//       width: "80%",
//     },
//   },
// }));


const Landingpage = () => {
  return (
    <>
      <Grid container spacing={2} className="imageOne">
        <Grid item md={8} xs={12} sm={6}>
          <h2
            style={{
              color: "#03045e",
              paddingLeft: "2rem",
              fontFamily: "monospace",
              fontSize: "40px",
            }}
          >
            Fast,Simple And Better Built <br />
            Project Management Application
          </h2>
        </Grid>
        <Grid item md={4} sm={6}>
          <img
            src={process.env.PUBLIC_URL+"images/titleimage.webp"}
            alt=""style={{width:"30vw",height:"45vh"}}
            className="titleImage"

          />
        </Grid>
      </Grid>
    </>
  );
}

export default Landingpage