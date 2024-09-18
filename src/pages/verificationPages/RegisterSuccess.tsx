import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
  } from "@mui/material";
  
  const RegisterSuccess = () => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Card sx={{ width: 1000, alignItems: "center" }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.primary", fontSize: 14 }}
              >
                <h2>You have signed up successfully! </h2>
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Please check your email to verify your account.
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/">Click here to Login</Button>
            </CardActions>
          </Card>
        </Box>
      </>
    );
  };
  
  export default RegisterSuccess;
  