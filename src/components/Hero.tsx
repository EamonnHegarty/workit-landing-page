import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ImageHero from "../assets/images/image-hero.webp";
import BgImage1 from "../assets/images/bg-pattern-1.svg";
import BgImage2 from "../assets/images/bg-pattern-2.svg";

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "primary.dark",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        paddingX: 2,
      }}
    >
      <Box
        component="img"
        src={BgImage1}
        alt="Bottom Right Decorative"
        sx={{
          position: "absolute",
          bottom: "30vh",
          left: "-20vh",
          "@media (max-width: 960px)": {
            left: "-100%",
          },
          "@media (min-width: 1600px)": {
            left: "0%",
          },
        }}
      />
      <Box maxWidth={500}>
        <Typography color="primary.light" variant="h1" mt={3}>
          Data tailored to your needs.
        </Typography>
      </Box>
      <Box
        mt={3}
        mb={3}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Button
          size="large"
          sx={{
            backgroundColor: "primary.main",
            color: "primary.dark",
            border: "2px solid",
            borderColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.dark",
              color: "primary.main",
              border: "2px solid",
              borderColor: "primary.main",
            },
          }}
        >
          Learn More
        </Button>
        <Box py={4} px={2} my={2} maxWidth={750}>
          <img
            src={ImageHero}
            alt="Main Hero Presentation"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Box
        component="img"
        src={BgImage2}
        alt="Bottom Right Decorative"
        sx={{
          position: "absolute",
          bottom: "25%",
          right: "-5%",
          width: "auto",
          height: "auto",
          "@media (max-width: 960px)": {
            right: "-100%",
          },
          "@media (min-width: 1600px)": {
            right: "0%",
          },
        }}
      />
    </Box>
  );
};

export default Hero;
