import React from 'react'
import QuickLinks from '../Components/QuickLinks'
import Header from '../Components/Header'
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import AuthHeader from '../Components/AuthHeader';

export default function Authentication() {
    return (
        <div>
            <Header />
            <AuthHeader/>
            <Box sx={{
               borderRadius: 1, marginTop: "4px", padding: "4px",
                boxShadow: '0 4px 10px 2px rgba(0,0,0,0.2)'
            }}>

                {/* display: "flex",margin: "5px auto" */}
                <Grid
                    sx={{
                        width: "auto",
                        marginTop: "20px",
                        height: "auto",
                        justifyContent: "space-around",

                    }}
                    container
                    columnSpacing={6}
                >
                    <Grid sx={{ height: "100%" }} direction="column" item xs={3}>
                        {/* <MyAppHeader label="My Apps" /> */}
                        <QuickLinks label="Customer Details" to="/" active={true} />
                        <QuickLinks label= "Admin Details" to="/" />
                        <QuickLinks label = "Admin Registration" to="/" />
                        <QuickLinks label="Reports" to="/" />


                    </Grid>
                    <Grid sx={{ width: "90%", height: "100%" }} item xs={9}>
                        {/* <MyAppHeader label="Document Received of Sub-dealer" /> */}
                        {/* <DocRecieveForm /> */}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
