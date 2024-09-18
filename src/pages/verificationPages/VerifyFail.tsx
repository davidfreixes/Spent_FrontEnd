import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
  } from "@mui/material";
  
  const VerifyFail = () => {
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
                <h2>Sorry, we could not verify your account.</h2>
              </Typography>
              <Typography variant="h5" component="div"></Typography>
              <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                Your acccount may already be verified, or your veification code
                could be incorrect.
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
  
  export default VerifyFail;
  