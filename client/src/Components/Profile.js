import React from "react";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Header from "../Components/Header";
// import { TextField, Button,FormControl,InputLabel,Select,MenuItem,} from "@mui/material";

const Profile = () => {
    const Styles = {
        text:{
            paddingTop: "10px",
            fontFamily: "Quicksand",
           // marginLeft: "100px",
            textAlign: "center",
        },
        // box1:{
        //     marginLeft: "100px",
        // }
    }
  return (
    <div>
        <Typography variant = 'h4' sx={Styles.text}>
                PROFILE SETTINGS
        </Typography>
      
    </div>
  )
}

export default Profile
