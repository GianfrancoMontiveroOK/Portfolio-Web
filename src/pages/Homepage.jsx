import React from "react";
import { Box } from "@mui/material";

import Hero1 from "../components/Hero1";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import Hero4 from "../components/Hero4";
import Hero5 from "../components/Hero5";
import Hero7 from "../components/Hero7";
import Hero6 from "../components/Hero6";

export default function Homepage() {
  return (
    <Box component="main" sx={{ overflowX: "hidden" }}>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      <Hero7 />
      <Hero6 />
    </Box>
  );
}
