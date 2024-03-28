import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/Home.css'


import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Proyects from "./components/Proyects";

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

        </Routes>
        
    </BrowserRouter>
    </ThemeProvider>
  );
}
