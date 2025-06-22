import React, { useState, createContext, useMemo } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

// Componentes
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import ProjectsPage from "./pages/Proyects";
import ContactPage from "./pages/ContactPage";
// Crear el contexto
export const GlobalStateContext = createContext();

export default function App() {
  const [power, setPower] = useState("base");

  // Función que define el tema según el "modo poder"
  const getTheme = (power) =>
    createTheme({
      palette: {
        mode: "dark",

        ...(power === "kaio" && {
          primary: { main: "#ff4d00" }, // naranja fuego
          secondary: { main: "#ffffff" }, // suave crema-anaranjado
          background: {
            default: "#1c0e0a", // fondo rojizo oscuro
            paper: "#2a110c", // panel más claro pero contrastante
          },
          text: {
            primary: "#ffffff",
            secondary: "#fffff",
          },
        }),

        ...(power === "mystic" && {
          primary: { main: "#8a2be2" }, // violeta fuerte
          secondary: { main: "#ffffff" }, // lila suave
          background: {
            default: "#0c001a", // violeta oscuro
            paper: "#1a0033",
          },
        }),

        ...(power === "ultraInstinct" && {
          primary: { main: "#00e5ff" }, // celeste neón
          secondary: { main: "#90caf9" }, // azul cielo más suave
          background: {
            default: "#0a0a0a", // negro puro
            paper: "#1a1a1a",
          },
        }),

        ...(power === "base" && {
          primary: { main: "#00FFC8" }, // verde menta fuerte
          secondary: { main: "#80cbc4" }, // turquesa claro
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
          text: {
            primary: "#ffffff",
            secondary: "#a7ffeb",
          },
        }),
      },
      typography: {
        fontFamily: ["Red Hat Display", "sans-serif"].join(","),
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 480,
          md: 768,
          lg: 1024,
          xl: 1536,
        },
      },
    });

  // Memo para evitar renders innecesarios
  const theme = useMemo(() => getTheme(power), [power]);
  const globalState = useMemo(() => ({ power, setPower }), [power]);

  return (
    <GlobalStateContext.Provider value={globalState}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </GlobalStateContext.Provider>
  );
}
