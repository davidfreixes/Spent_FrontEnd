import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { apiLogin } from "../api/AuthApiManager";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;


    const token = await apiLogin(email, password);
    if (token == "User account is not verified" || token == "Invalid credentials.") {
      setErrorMessage(token);
      return;
    }

    if (token == undefined || token == "") {
      setErrorMessage("Invalid credentials");
    } else {
      localStorage.setItem("accessToken", token);
      window.location.reload();
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url("/LoginBackground.jpg")',

          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,

          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 5
            }}
          >
            <Box
              component="img"
              src="/SPENT.png"
              alt="SPENT logo"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Avatar sx={{ m: 1, bgcolor: "black" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: 'center', }}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, flexDirection: "column", width: '70%', }}
            >
              <Typography sx={{ fontWeight: 'bold', mb: -1.5, mt: 1 }}>
                Email address
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="you@example.com"
                name="email"
                autoComplete="email"
                autoFocus
                variant="filled"
              />
              <Typography sx={{ fontWeight: 'bold', mb: -1.5, mt: 1 }}>
                Password
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Your Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="filled"
              />
              {errorMessage && (
                <Typography sx={{ color: 'red', mb: 2 }}>
                  {errorMessage}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
              >
                Sign In
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                Don't have an account? <Link href="/register">Register</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
