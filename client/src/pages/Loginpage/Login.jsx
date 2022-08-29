import React, { useEffect } from 'react'
import './Login.css'
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../features/user/userActions";



const Login = () => {
  const theme = createTheme();
  const { loading, error,userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

    useEffect(() => {
      if (userInfo) {
        navigate("/home");
      }
    }, [navigate, userInfo]);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(userLogin(data))
  };


  return (
    <div
      className="loginbackground"
      style={{
        // backgroundImage: "linear-gradient(to right, #007991 , #78ffd6)",
        background: "#839788",
        height: "100%",
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
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "25px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", { required: "true" })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>Please enter your email</p>
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
                <p style={{ color: "red" }}>Please enter your password</p>
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

export default Login