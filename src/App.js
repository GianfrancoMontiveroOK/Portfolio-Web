import React, { createContext, useMemo, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ProjectsPage from "./pages/Proyects";
import ContactPage from "./pages/ContactPage";
import ActivosPage from "./pages/ActivosPage";

export const GlobalStateContext = createContext({
  power: "base",
  setPower: () => {},
});

const accentPalettes = {
  base: { primary: "#37E6B0", secondary: "#8EE8D0" },
  kaio: { primary: "#FF7A45", secondary: "#FFB090" },
  mystic: { primary: "#A982FF", secondary: "#D2C2FF" },
  ultraInstinct: { primary: "#55D8FF", secondary: "#A6EAFF" },
};

export default function App() {
  const [power, setPower] = useState("base");

  const theme = useMemo(() => {
    const accent = accentPalettes[power] || accentPalettes.base;

    return createTheme({
      palette: {
        mode: "dark",
        primary: { main: accent.primary },
        secondary: { main: accent.secondary },
        background: {
          default: "#08100F",
          paper: "#101A18",
        },
        text: {
          primary: "#F5FAF8",
          secondary: "#A9B8B3",
        },
      },
      typography: {
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        h1: { fontWeight: 800, letterSpacing: "-0.045em" },
        h2: { fontWeight: 800, letterSpacing: "-0.035em" },
        h3: { fontWeight: 750, letterSpacing: "-0.025em" },
        button: { textTransform: "none", fontWeight: 700 },
      },
      shape: { borderRadius: 16 },
      components: {
        MuiButton: {
          styleOverrides: {
            root: { borderRadius: 999, paddingInline: 22 },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: { backgroundImage: "none" },
          },
        },
      },
    });
  }, [power]);

  const globalState = useMemo(() => ({ power, setPower }), [power]);

  return (
    <GlobalStateContext.Provider value={globalState}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/activos" element={<ActivosPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </GlobalStateContext.Provider>
  );
}
