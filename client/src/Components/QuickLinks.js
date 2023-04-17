import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const QuickLinks = (props) => {
  const { label, to, active , icon: Icon } = props;
  const borderColor = active ? "#3385ff" : "transparent";
  const backgroundColor = active ? "#e6f2ff" : "transparent";
  return (
    <div>
      <Button
        component={Link}
        to={to}                             
        sx={{
       //   marginTop: "20px",
          padding: "20px",
          width: "100%",
          fontFamily: "Quicksand",
          color: "black",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          borderLeft: `4px solid ${borderColor}`,
          "&:hover": {
            borderColor: "#99ccff", //hover border color
          },
          backgroundColor: backgroundColor,
          "&:hover": {
          backgroundColor: "#cce6ff",   //hover color
          },
        }}
      >
       <Icon sx={{ color: "BLACK", fontSize: "15px", paddingRight: "10px" }} />
        {label}
      </Button>
    
    </div>
  );
};

export default QuickLinks;
