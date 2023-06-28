import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../src/components/Header'
import About from './pages/About';
import { purple, grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  return (
    <Container>
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Header />
        <Grid container spacing={2}>
    
  <Grid item sm={12} md={4}>
    <About />
  </Grid>
  <Grid item sm={12} md={8}>
     <Stack sx={{ width: '100%', color: 'grey'}} spacing={2}>
      <LinearProgress color="secondary" />
      <Typography color={grey[500]}>New content coming soon</Typography>
    </Stack>
  </Grid>
  </Grid>
  
       
       
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: purple[900]
          }}
        >
          <Container>
            <Typography variant="body2" color={grey[50]}>
      Full Stack Software Developer. Skilled in HTML | CSS | JavaScript | Python | Django | React
    </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
    </Container>
  );
}