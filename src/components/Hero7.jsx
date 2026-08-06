import React from "react";
import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CommitRoundedIcon from "@mui/icons-material/CommitRounded";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolioData";

const practices = [
  { icon: <CommitRoundedIcon />, title: "Control de versiones", text: "Trabajo incremental y registro de cambios." },
  { icon: <BugReportOutlinedIcon />, title: "Corrección y soporte", text: "Diagnóstico de errores sobre sistemas reales." },
  { icon: <AutorenewRoundedIcon />, title: "Iteración", text: "Mejora continua a partir de uso y feedback." },
];

export default function Hero7() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={5}>
            <SectionHeading
              eyebrow="Evidencia técnica"
              title="Código, iteración y mantenimiento continuo."
              description="Mi actividad pública es una parte de un trabajo que también incluye repositorios privados, productos en producción y soporte operativo."
            />
            <Button
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon />}
              endIcon={<OpenInNewRoundedIcon />}
              sx={{ mt: 3 }}
            >
              Ver perfil de GitHub
            </Button>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper
              variant="outlined"
              sx={{ p: { xs: 2, sm: 3 }, borderColor: "rgba(255,255,255,0.09)", overflow: "hidden" }}
            >
              <Box sx={{ width: "100%", overflowX: "auto", pb: 1 }}>
                <Box
                  component="img"
                  src="https://ghchart.rshah.org/37E6B0/GianfrancoMontiveroOK"
                  alt="Historial público de contribuciones en GitHub"
                  loading="lazy"
                  sx={{ display: "block", width: "100%", minWidth: 650 }}
                />
              </Box>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {practices.map((practice) => (
                  <Grid item xs={12} sm={4} key={practice.title}>
                    <Stack direction="row" spacing={1.2} alignItems="flex-start">
                      <Box color="primary.main">{practice.icon}</Box>
                      <Box>
                        <Typography variant="body2" fontWeight={800}>
                          {practice.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" lineHeight={1.45}>
                          {practice.text}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
