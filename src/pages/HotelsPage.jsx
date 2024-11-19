import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Box, Typography, Container } from "@mui/material";

import hotelImg from "../Hotel.png";

import { useDispatch, useSelector } from "react-redux";
import { fetchHotelList } from "../redux/slices/hotelSlice";

const HotelPage = () => {
  const dispatch = useDispatch();
  const hotelList = useSelector((state) => {
    return state.hotel;
  });

  useEffect(() => {
    dispatch(fetchHotelList());
  }, [dispatch]);

  return (
    <Container sx={{ margin: "24px" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          {hotelList.map((hotel, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ minHeight: "380px" }}>
                <CardContent>
                  <img
                    src={hotelImg}
                    alt="Hotel"
                    style={{ maxWidth: "100%", maxHeight: "auto" }}
                  />
                  <Typography
                    gutterBottom
                    sx={{ color: "black", fontSize: 24 }}
                  >
                    {hotel.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: 16 }}
                  >
                    address: 
                    {hotel.address}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: 16 }}>
                    city:${hotel.city} {hotel.state ? `state: ${hotel.state};` : ""} country code:{" "} {hotel.country_code}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HotelPage;
