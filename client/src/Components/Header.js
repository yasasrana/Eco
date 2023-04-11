import React from "react";
import Logo from "../Images/LOGO.png";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";


const Header = () => {
   
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Styles = {
    headerContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    logo: {
      display: "block",
      margin: "auto",
      width: "40px",
    },
    button : {
      width: "auto",
      mr:3,
      color: "black"
    }
  };

  return (
    <header style={Styles.headerContainer}>
      <img style={Styles.logo} src={Logo} alt="Logo" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          padding: "1px",
        }}
      >
        <Button sx={Styles.button}>HOME</Button>
        <Button sx={Styles.button}>MODELS</Button>
        <Button sx={Styles.button}>ENERGY</Button>
        <Button sx={Styles.button}>SUSTAINABILITY</Button>
        <Button sx={Styles.button}>SUPPORT</Button>
        <Button sx={Styles.button}>ABOUT</Button>
      </Box>
    </header>
  );
};

export default Header;
