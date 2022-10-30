import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";
import { useSelector } from "react-redux";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "join projects",
      "create tasks & sub-tasks",
      "group chat",
    ],
    buttonText: "Continue",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "500",
    description: [
      "create projects",
      "join projects",
      "create tasks & sub-tasks",
      "group chat",
    ],
    buttonText: "Continue",
    buttonVariant: "contained",
  },
  // {
  //   title: "Enterprise",
  //   price: "800",
  //   description: [
  //     "plan details",
  //     "plan details",
  //     "plan details",
  //     "plan details",
  //   ],
  //   buttonText: "Continue",
  //   buttonVariant: "outlined",
  // },
];


const Plans = () => {

  const { signupInfo } = useSelector((state) => state.user);
  console.log(signupInfo, "info user");
   
  const navigate = useNavigate();

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  
  const handleClick = (title)=>{
    if(title==="Free"){
      navigate("/login")
    }else{
      displayRazorpay()
    }
  }

  async function displayRazorpay() {
    
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      console.log("sdfdsf");
      const result = await axios.post("/subscription");

      console.log(result);

      if (!result) {
        alert("Server error. Are you online?");
        return;
      }

      const { id } = result.data;

      // const {amount} = result.data.

      const options = {
        key: "rzp_test_MkOPieSMPDcB0n",
        subscription_id: id,
        amount: "500",
        name: "Aventur",
        description: "Monthly subscription plans",
        image: "",
        handler: async function (response) {
          console.log(response, "responsefdf");
          const data = {
            paymentId: response.razorpay_payment_id,
            subscriptionId: response.razorpay_subscription_id,
            signature: response.razorpay_signature,
            userId: signupInfo._id,
          };
          const details = await axios.post(
            "/subSuccess",
            data
          );
          if (details) {
            console.log(details,"detailss")
            navigate("/login");
          }
        },
        prefill: {
          name: "Aventure ",
          email: "contact.aventure@aventure.com",
          contact: "+919876543210",
        },
        notes: {
          note_key_1: "Tea. Earl Grey. Hot",
          note_key_2: "Make it so.",
        },
        theme: {
          color: "#F37254",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error, "rrrrr");
    }
  }
  
 
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 2, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: "#44A08D",
                    color: "white",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h4"
                      color="text.primary"
                    >
                      Rs{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    // // onClick={displayRazorpay}
                    onClick={()=>handleClick(tier.title)}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Plans;
