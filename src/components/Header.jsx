import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header =  () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: 'white' }} >
          <Toolbar>
            <Typography variant="h6" to="/" component={NavLink}   sx={{ color: 'orange', 
            textDecoration: 'none',  fontSize:30,
            fontWeight: 'bold', flexGrow: 1 }}   >
                Booking
            </Typography>
            <Box sx={{ display: 'flex', gap: 2,  color:"white"}}>
              <Button color="inherit" component={NavLink} to="/about"  sx={{ backgroundColor: 'orange' }}>
                About
              </Button>
              <Button color="inherit" component={NavLink} to="/hotels"   sx={{ backgroundColor: 'orange' }} >
                Hotels
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      );
}
export default Header