import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, CardActionArea } from "@mui/material";
import Box from "@mui/material";
import Button from '@mui/material/Button';


export default function CustomerProfile() {
    const Styles = {
        img: {
          display: "block",
          width: "100px",
          paddingTop: "2px",
          marginLeft: "10px",
        },}
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Box>
            <img style={Styles.img} src={Avatar} alt="Logo" />
            </Box>
            <Typography gutterBottom variant="h5" component="div">
            First Name : 
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Last Name : 
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            User Name : 
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Email : 
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Password : 
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Date : 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
