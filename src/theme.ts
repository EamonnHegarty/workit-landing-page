import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF", // White background
    },
    primary: {
      main: "#44FFA1", //greenish
      light: "#FFFFFF", //white
      dark: "#24053E", //purply
    },
    secondary: {
      main: "#584D62", //dark gray
      light: "#FCF8FF", //very light gray
    },
  },
  typography: {
    fontFamily: "Manrope, sans-serif", // Default font is Manrope
    h1: {
      fontFamily: "Fraunces, serif",
      fontWeight: 600,
      fontSize: "80px",
      lineHeight: "80px",
    },
    h2: {
      // assuming heading M
      fontFamily: "Fraunces, serif",
      fontWeight: 600,
      fontSize: "56px",
      lineHeight: "64px",
    },
    h3: {
      // assuming heading S
      fontFamily: "Fraunces, serif",
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "40px",
    },
    body1: {
      fontFamily: "Manrope, sans-serif",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "32px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Manrope, sans-serif",
          fontWeight: 600,
        },
      },
    },
  },
});

export { theme };
