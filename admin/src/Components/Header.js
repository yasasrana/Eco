import React from 'react'
import Grid from '@mui/material/Grid';
import Logo from '../Images/logo.png'
import { Typography } from '@mui/material';

export default function Header() {
const Styles = {
  img : {
    display: "block",
      width: "100px",
      paddingTop : "2px",
      marginLeft:"10px"
  },
  text:{
    fontFamily: "Quicksand",
  }
}
  return (
   
      <Grid container  sx={{ justifyContent:"space-between",display:"flex"}}>
        <Grid item xs={2}>
          <img style={Styles.img} src={Logo} alt="Logo" />
        </Grid>
        <Grid item xs={2}>
        <Typography style={Styles.text}><b>DASHBOARD |</b></Typography>
        </Grid>
      </Grid>
  )
}
