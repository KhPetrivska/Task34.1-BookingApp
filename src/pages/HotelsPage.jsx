import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import hotelImg from "../Hotel.png"

import {  Box, Typography, Container } from '@mui/material';


const HotelPage =  () => {
    return(
        <Container sx={{ margin:"24px" }} >
     <Card sx={{ width: "30%" }}>
      <CardContent >
      <img src={hotelImg} alt="Hotel Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        <Typography gutterBottom sx={{ color: 'black', fontSize: 24 }}>
         Grant Hotel
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 16}}>
     Address: 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 16}}>
    City:
        </Typography>
      </CardContent>
    </Card>
     </Container>
)
}
export default HotelPage