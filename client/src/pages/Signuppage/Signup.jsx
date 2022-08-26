import React from 'react'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";


const Signup = () => {
  const theme = createTheme();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
      console.log(data)
    
    }
  return (
    <div
      className="loginbackground"
      style={{
        // backgroundImage: "linear-gradient(to right, #007991 , #78ffd6)",
        background: "#839788",
        height: "fit-content",
        position: "absolute",
        width: "100%",
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper
            elevation={12}
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                required
                id="name"
                label="Name"
                name="name"
                type="string"
                autoFocus
                {...register("name", { required: "true" })}
              />
              {errors.name && (
                <p style={{ color: "red" }}>Please enter your name</p>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                autoComplete="email"
                autoFocus
                {...register("email", { required: "true" })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>Please enter your email address</p>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="phoone"
                label="Phone"
                name="phone"
                type="string"
                autoFocus
                {...register("phone", { required: "true" })}
              />
              {errors.phone && (
                <p style={{ color: "red" }}>Please enter your phone number</p>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", { required: "true" })}
              />
              {errors.password && (
                <p style={{ color: "red" }}>Please enter a password</p>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Signup