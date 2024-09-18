import { Box, Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const VerifySuccess = () => {
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
              <h2>Congratulations, your account is now verified!</h2>
            </Typography>
            <Typography variant="h5" component="div"></Typography>
          </CardContent>
          <CardActions>
            <Button href="/">Click here to Login</Button>
          </CardActions>
        </Card>
      </Box>
    </>
    );
};

export default VerifySuccess;