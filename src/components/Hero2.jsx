import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { highlights } from "../data/portfolioData";

export default function Hero2() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Experiencia aplicada"
          title="No solo desarrollo pantallas: construyo sistemas completos."
          description="Mi experiencia combina software, análisis de procesos y contacto directo con usuarios. Eso me permite entender cómo una decisión técnica impacta en la operación diaria."
        />

        <Grid container spacing={2.5} sx={{ mt: 4 }}>
          {highlights.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.label}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  height: "100%",
                  borderColor: "rgba(255,255,255,0.09)",
                  bgcolor: "rgba(255,255,255,0.025)",
                }}
              >
                <Typography color="primary.main" fontWeight={800} fontSize="1.4rem">
                  {item.value}
                </Typography>
                <Typography fontWeight={700} sx={{ mt: 0.5 }}>
                  {item.label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.65 }}>
                  {item.detail}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
