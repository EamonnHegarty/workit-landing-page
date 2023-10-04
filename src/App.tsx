import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h1">Content</Typography>
      </Box>
    </>
  );
}

export default App;
