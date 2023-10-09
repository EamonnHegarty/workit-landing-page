import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import TestimonialSection from "./components/TestimonialSection";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <CardSection />
      <TestimonialSection />
    </Box>
  );
}

export default App;
