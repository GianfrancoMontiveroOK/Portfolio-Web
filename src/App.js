import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/Home.css'


import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Footer from "./components/Footer";

import {createTheme, ThemeProvider} from '@mui/material/styles'
import { Helmet } from 'react-helmet';

const theme = createTheme({
  palette:{
    primary:{
      main:'#00FFCC'
    },
    secondary:{
      main: '#1a1a1a'
    },
    success:{
      main: '#eefffa'
    }
  },
  typography: {
    fontFamily: [
      '', // Puedes cambiar 'Arial' por la fuente que desees utilizar
      'sans-serif',
    ].join(','),
  },
  breakpoints:{
    values:{
      xs: 200,
      sm: 500,
      md: 800,
      lg: 1200,
      xl: 1500,
    }
  },
  
 
})

export default function App() {
  return (
    
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>Gianfranco Montivero</title>
      </Helmet>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/about" element={<About />} />


        </Routes>
        <Footer></Footer>
        
    </BrowserRouter>
    </ThemeProvider>
  );
}
