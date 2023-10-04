import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ImageHero from "../assets/images/image-hero.webp";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        paddingX: 2,
      }}
    >
      <Typography color="primary.light" variant="h1" mt={3}>
        Data tailored to your needs.
      </Typography>
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
        <Box py={4} px={2} my={2} width="90%" height="80%" maxWidth={750}>
          <img
            src={ImageHero}
            alt="Hero Description"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
