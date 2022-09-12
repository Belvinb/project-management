import React from "react";
import Grid from "@mui/material/Grid";
import "./Landingpage.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    title: "create/join projects",
    description: "Create join and manage multiple projects",
    image: process.env.PUBLIC_URL + "images/createProject.webp",
  },
  {
    title: "create tasks and subtasks",
    description: "Create tasks and assign subtasks",
    image: process.env.PUBLIC_URL + "images/createTask.webp",
  },
  {
    title: "create teams",
    description: "invite and create teams to work on projects",
    image: process.env.PUBLIC_URL + "images/createTeam.webp",
  },
  {
    title: "chat",
    description: "chat with teammates",
    image: process.env.PUBLIC_URL + "images/chat.webp",
  },
];

const Landingpage = () => {
  return (
    <>
      <Grid container spacing={1} className="imageOne">
        <Grid item md={8} xs={12} sm={6}>
          <h3 className="Title">
            Fast,Simple And Better Built <br />
            Project Management Application
          </h3>
          <h4 className="SubTitle">
            now create,manage and join multiple projects with seamless ui
          </h4>
        </Grid>

        <Grid item md={4} sm={6}>
          <img
            className="titleImage"
            src={process.env.PUBLIC_URL + "images/title1.png"}
            alt=""
          />
        </Grid>
      </Grid>

      {/* 2nd row */}

      <Grid container>
        <div className="featuretitle">
          <h1>Features</h1>
        </div>

        {features.map((feature) => (
          <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            style={{ display: "flex", paddingLeft: "2rem" }}
          >
            <Card
              sx={{
                width: 295,
                height: 300,
                marginTop: "6rem",
                marginRight: "1rem",
              }}
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19",
              }}
            >
              <CardActionArea>
                <CardMedia component="img" height="180" image={feature.image} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container className="getStarted" xs={12} md={10}>
        <Grid
          item
          sm={12}
          md={6}
          className="startsec1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <h3 style={{}}>
            Create your first project <br /> with <br />
            <span style={{ fontSize: "35px", marginTop: "2rem" }}>
              <span style={{ color: "red" }}>A</span>VENTURE
            </span>
          </h3>

          <Button
            style={{ backgroundColor: "#ef233c", marginTop: "2rem" }}
            size="large"
            variant="contained"
          >
            <Link to ="/signup" style={{color:"white",textDecoration:"none"}}>Let's Go</Link>
          </Button>
        </Grid>
        <Grid item sm={12} md={6} className="startsec2"></Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Landingpage;
