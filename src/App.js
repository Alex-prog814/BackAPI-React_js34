import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainRoutes from './MainRoutes';
import { Box } from '@mui/material';

const App = () => {
  return (
    <>
      <Navbar />
      <Box sx={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <MainRoutes />
      </Box>
      <Footer />
    </>
  )
}

export default App