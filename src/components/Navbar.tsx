import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LogoLight from "../assets/images/logo-light.svg";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "primary.dark" }} position="static">
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 1rem",
          }}
        >
          <img src={LogoLight} alt="web app logo" />
          <Button
            sx={{
              color: "primary.light",
              borderBottom: "2px solid",
              borderColor: "primary.main",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Apply for access
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
