import React, { useContext } from "react";
import { Box, useTheme } from "@mui/material";
import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Hero5 from "../components/Hero5";
import Hero6 from "../components/Hero6";
import Hero7 from "../components/Hero7";
import { GlobalStateContext } from "../App";

export default function Homepage() {
  const { power } = useContext(GlobalStateContext);
  const theme = useTheme();

  const backgroundColors = {
    base: theme.palette.background.default,
    kaio: "#0d1a1f",
    mystic: "#1e0033",
    ultraInstinct: "#111111",
  };

  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
        backgroundColor:
          backgroundColors[power] || theme.palette.background.default,
        transition: "background-color 0.5s ease",
      }}
    >
      <Hero1 power={power} />
      <Hero2 power={power} />
      <Hero3 power={power} />
      <Hero4 power={power} />
      <Hero5 power={power} />
      <Hero7 power={power} />
      <Hero6 power={power} />
    </Box>
  );
}
