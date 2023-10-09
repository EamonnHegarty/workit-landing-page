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
        height: { lg: "470px", xl: "550px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        paddingX: 2,
        borderBottomLeftRadius: "60% 10%",
        borderBottomRightRadius: "60% 10%",
        marginBottom: { sm: "40px", md: "250px" },
      }}
    >
      <Box
        component="img"
        src={BgImage1}
        alt="first background decorative image swirl"
        sx={{
          position: "absolute",
          bottom: "30vh",
          left: "-20vh",
          "@media (max-width: 960px)": {
            left: "-150%",
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
        <Box py={4} px={2} my={2} maxWidth={700}>
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
        alt="second background decorative image swirl"
        sx={{
          position: "absolute",
          bottom: "25%",
          right: "-5vh",
          "@media (max-width: 960px)": {
            right: "-150%",
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
