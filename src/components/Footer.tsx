import { Box } from "@mui/material";
import LogoDark from "../assets/images/logo-dark.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  const socialIcons = [Facebook, Twitter, Instagram];

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingBottom={5}
      >
        <Box
          component="img"
          src={LogoDark}
          alt="dark version of web page logo"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingBottom={5}
        gap={5}
      >
        {socialIcons.map((icon, index) => (
          <Box key={index} component="img" alt="icons" src={icon} />
        ))}
      </Box>
    </>
  );
};

export default Footer;
