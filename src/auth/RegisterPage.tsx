import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, CssBaseline, Grid, Link, Paper, Typography } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { apiRegister } from "../api/AuthApiManager";
import { emailValidator, nameValidator, passwordValidator, usernameValidator } from "../validations/RegisterValidator";
import ValidatedTextField from "../validations/ValidatedTextField";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [emailIsValid, setEmailIsValid] = React.useState(false);
  const [passwordIsValid, setPasswordIsValid] = React.useState(false);
  const [confirmPasswordIsValid, setConfirmPasswordIsValid] = React.useState(false);
  const [usernameIsValid, setUsernameIsValid] = React.useState(false);
  const [nameIsValid, setNameIsValid] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const name = data.get("name") as string;
    const username = data.get("username") as string;
    if (!emailIsValid || !passwordIsValid || !confirmPasswordIsValid || !usernameIsValid || !nameIsValid) {
      alert("Please fill in all fields correctly");
      return;
    }

    if (password !== data.get("confirm-password")) {
      alert("Passwords do not match");
      return;
    }
    await apiRegister(email, password, name, username);
    navigate('/register-success');
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        id="grid"
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
          backgroundPosition: "left",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Avatar sx={{ m: 1, bgcolor: "black" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: 'center', }}>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: '70%' }}
            >
              <Typography sx={{ fontWeight: 'bold', mb: -1.5 }}>
                Email address
              </Typography>
              <ValidatedTextField
                margin="normal"
                required={true}
                fullWidth
                id="email"
                label="you@example.com"
                name="email"
                autoComplete="email"
                autoFocus
                multiline={false}
                rows={1}
                validator={emailValidator}
                onChange={(isValid) => setEmailIsValid(isValid)}
                variant="filled"
              />
              <Typography sx={{ fontWeight: 'bold', marginBottom: -1.5, mt: 1 }}>
                First Name
              </Typography>
              <ValidatedTextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your First Name"
                name="name"
                autoComplete="name"
                multiline={false}
                rows={1}
                validator={nameValidator}
                onChange={(isValid) => setNameIsValid(isValid)}
                variant="filled"
              />
              <Typography sx={{ fontWeight: 'bold', marginBottom: -1.5, mt: 1 }}>
                Username
              </Typography>
              <ValidatedTextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Your Username"
                name="username"
                autoComplete="username"
                multiline={false}
                rows={1}
                validator={usernameValidator}
                onChange={(isValid) => setUsernameIsValid(isValid)}
                variant="filled"
              />
              <Typography sx={{ fontWeight: 'bold', marginBottom: -1.5, mt: 1 }}>
                Password
              </Typography>
              <ValidatedTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Your password"
                type="password"
                id="password"
                autoComplete="current-password"
                multiline={false}
                rows={1}
                validator={passwordValidator}
                onChange={(isValid) => setPasswordIsValid(isValid)}
                variant="filled"
              />
              <Typography sx={{ fontWeight: 'bold', marginBottom: -1.5, mt: 1 }}>
                Confirm Password
              </Typography>
              <ValidatedTextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="Confirm your password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                multiline={false}
                rows={1}
                onChange={(isValid) => setConfirmPasswordIsValid(isValid)}
                validator={() => false}
                variant="filled"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
              >
                Register
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                Already have an account? <Link href="/">Login</Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}