import React from "react";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import { Link } from "react-router-dom";

import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/portfolioData";

export default function ActivosPage() {
  return (
    <Box component="main" sx={{ pt: { xs: 13, md: 15 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Button component={Link} to="/" startIcon={<ArrowBackRoundedIcon />} sx={{ mb: 3, px: 0 }}>
          Volver al inicio
        </Button>

        <SectionHeading
          eyebrow="Experiencia"
          title="Trayectoria construida sobre problemas y usuarios reales."
          description="Mi experiencia principal nació creando y manteniendo productos completos. Eso incluye programación, análisis, comunicación con usuarios, despliegue y soporte."
        />

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={8}>
            <Stack spacing={3}>
              {experience.map((item) => (
                <Paper
                  key={`${item.company}-${item.period}`}
                  variant="outlined"
                  sx={{ p: { xs: 3, md: 4 }, borderColor: "rgba(255,255,255,0.09)" }}
                >
                  <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={1}>
                    <Box>
                      <Typography component="h2" variant="h5" fontWeight={800}>
                        {item.role}
                      </Typography>
                      <Typography color="primary.main" fontWeight={700} sx={{ mt: 0.5 }}>
                        {item.company}
                      </Typography>
                    </Box>
                    <Chip label={item.period} variant="outlined" sx={{ alignSelf: "flex-start" }} />
                  </Stack>
                  <Typography color="text.secondary" sx={{ mt: 2, lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                  <List dense disablePadding sx={{ mt: 1.5 }}>
                    {item.achievements.map((achievement) => (
                      <ListItem key={achievement} disableGutters alignItems="flex-start">
                        <ListItemIcon sx={{ minWidth: 30, mt: 0.2 }}>
                          <CheckRoundedIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={achievement}
                          primaryTypographyProps={{ color: "text.secondary", lineHeight: 1.6 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3.5,
                position: { md: "sticky" },
                top: { md: 100 },
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <WorkHistoryOutlinedIcon color="primary" sx={{ fontSize: 38 }} />
              <Typography variant="h5" fontWeight={800} sx={{ mt: 2 }}>
                Qué puedo aportar
              </Typography>
              <Stack spacing={2} sx={{ mt: 2.5 }}>
                {[
                  "Desarrollo de funcionalidades full stack.",
                  "Análisis y simplificación de procesos.",
                  "Integración de APIs y servicios externos.",
                  "Mantenimiento y corrección de sistemas existentes.",
                  "Comunicación directa con usuarios y negocio.",
                ].map((value) => (
                  <Stack key={value} direction="row" spacing={1.2} alignItems="flex-start">
                    <CheckRoundedIcon color="primary" fontSize="small" sx={{ mt: 0.2 }} />
                    <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                      {value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
