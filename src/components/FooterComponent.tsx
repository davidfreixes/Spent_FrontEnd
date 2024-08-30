import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";


const logoStyle = {
  width: "100px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography color="text.secondary" mt={1} sx={{ fontSize: "12px" }}>
      {"Copyright © "}
      <Link href="https://mui.com/">SPENT&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
        fontFamily: "Roboto",
        fontSize: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          borderTop: "1px solid",
          pt: { xs: 4, sm: 5 },
          borderColor: "divider",
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "70%"} }}>
          <Box
            sx={{
              ml: "-15px",
              textAlign: "left",
              marginTop: "10px",
              marginLeft: "1px",
              marginBottom: 1,
            }}

          >
            <img src={"/SPENT.png"} style={logoStyle} alt="logo of SPENT" />
          </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Spent is a web application designed for sports enthusiasts of all
            kinds. This platform allows users to create and join these sports
            events, promoting health and the creation of sustainable local
            communities.
          </Typography>
          <div>
            <Link color="text.secondary" href="#">
              Privacy Policy
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" href="#">
              Terms of Service
            </Link>
            <Copyright />
          </div>
        </Box>

      </Box>
    </Container>
  );
}
