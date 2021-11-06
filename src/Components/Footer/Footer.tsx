import React from 'react';
import {Link, Container, Typography, Box, CssBaseline} from '@mui/material';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" style={{marginTop: 10}}>
        {'Copyright © '}
        <Link color="inherit" variant="body2" href="https://cynoteck.com/about-us/">
          Cynoteck Solutions Pvt. Ltd
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

export default function Footer(): JSX.Element {
    return (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          textAlign: 'center'
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            // px: 2,
            mt: 'auto',
            // backgroundColor:"#fbfbff"
            // backgroundColor: (theme) =>
            //   theme.palette.mode === 'light'
            //     ? theme.palette.grey[200]
            //     : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" >
              Crafted with ❤️ by React Engineers 
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    )
}
