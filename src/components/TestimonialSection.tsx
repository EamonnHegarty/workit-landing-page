import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import Founder from "../assets/images/image-founder.webp";

const TestimonialSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.light",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 25,
        paddingBottom: 10,
        px: 2,
        position: "relative",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        component="img"
        src={Founder}
        alt="Testimonial Image"
        sx={{
          width: { xs: "300px", md: "450px" },
          height: { xs: "300px", md: "400px" },
          position: "relative",
          top: { xs: "-45px", md: "-90px" },
          zIndex: 0,
          order: { xs: -1, md: 0 },
        }}
      />
      <Card
        sx={{
          boxShadow: "none",
          backgroundColor: "primary.dark",
          border: "none",
          width: { xs: "90%", md: "650px" },
          height: "auto",
          marginLeft: { xs: 0, md: "-100px" },
          marginTop: { xs: "-70px", md: "0" },
          zIndex: 1,
          position: "relative",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            gap: 2,
            p: 3,
          }}
        >
          <Typography variant="h2" color={"primary.light"} align="left" mb={2}>
            Be the first to test
          </Typography>
          <Typography variant="body1" color={"primary.light"} mb={2}>
            Hi, I'm Louis Grahma, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I'll be in touch to schedule a
            call
          </Typography>
          <Button variant="contained" size="large" sx={{ maxWidth: 200 }}>
            Click me
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TestimonialSection;
