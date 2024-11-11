import React from "react";
import {  Box, Typography, Container } from '@mui/material';

const AboutPage =  () => {
return(
    <Container maxWidth="md">
 <Box sx={{ mt: 5, textAlign: 'left' }}>
 <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   
        </Typography>

 </Box>
 
    </Container>
)
}
export default AboutPage 