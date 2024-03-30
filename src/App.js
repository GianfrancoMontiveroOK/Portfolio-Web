import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/Home.css'


import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Proyects from "./components/Proyects";
import Footer from "./components/Footer";

const theme = createTheme({
  palette:{
    primary:{
      main:'#009697'
    },
    secondary:{
      main: '#1a1a1a'
    },
    success:{
      main: '#eefffa'
    }
  },
 
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
