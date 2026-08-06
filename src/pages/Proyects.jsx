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
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { Link } from "react-router-dom";

import SectionHeading from "../components/SectionHeading";
import { featuredProjects } from "../data/portfolioData";
import memorialImage from "../images/memorial-dashboard.webp";
import ubikaImage from "../images/ubika-dashboard.webp";

const images = { memorial: memorialImage, ubika: ubikaImage };

export default function ProjectsPage() {
  return (
    <Box component="main" sx={{ pt: { xs: 13, md: 15 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Button component={Link} to="/" startIcon={<ArrowBackRoundedIcon />} sx={{ mb: 3, px: 0 }}>
          Volver al inicio
        </Button>

        <SectionHeading
          eyebrow="Portfolio técnico"
          title="Casos reales, responsabilidades y decisiones."
          description="La selección prioriza proyectos donde puedo explicar claramente el problema, mi participación y el resultado. Evito presentar demos aisladas como si fueran experiencia profesional."
        />

        <Stack spacing={4} sx={{ mt: 5 }}>
          {featuredProjects.map((project) => (
            <Paper
              key={project.id}
              variant="outlined"
              sx={{
                p: { xs: 2.5, md: 4 },
                borderColor: "rgba(255,255,255,0.09)",
                bgcolor: "rgba(255,255,255,0.02)",
              }}
            >
              <Grid container spacing={{ xs: 3, md: 5 }} alignItems="flex-start">
                <Grid item xs={12} md={project.image ? 7 : 12}>
                  <Typography variant="overline" color="primary.main" fontWeight={800}>
                    {project.eyebrow}
                  </Typography>
                  <Typography component="h2" variant="h3" sx={{ mt: 0.5, fontSize: { xs: "2rem", md: "2.75rem" } }}>
                    {project.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.75, maxWidth: 780 }}>
                    {project.summary}
                  </Typography>

                  <Paper
                    elevation={0}
                    sx={{ mt: 3, p: 2.5, bgcolor: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Rol
                    </Typography>
                    <Typography fontWeight={800} sx={{ mt: 0.5 }}>
                      {project.role}
                    </Typography>
                  </Paper>

                  <Typography fontWeight={800} sx={{ mt: 3 }}>
                    Responsabilidades principales
                  </Typography>
                  <List dense disablePadding sx={{ mt: 1 }}>
                    {project.responsibilities.map((item) => (
                      <ListItem key={item} disableGutters alignItems="flex-start">
                        <ListItemIcon sx={{ minWidth: 31, mt: 0.25 }}>
                          <CheckCircleOutlineRoundedIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{ color: "text.secondary", lineHeight: 1.6 }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Typography fontWeight={800} sx={{ mt: 2 }}>
                    Resultado
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.7 }}>
                    {project.outcome}
                  </Typography>

                  <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mt: 2.5 }}>
                    {project.technologies.map((technology) => (
                      <Chip key={technology} label={technology} size="small" variant="outlined" />
                    ))}
                  </Stack>

                  {project.link && (
                    <Button
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      endIcon={<OpenInNewRoundedIcon />}
                      sx={{ mt: 3 }}
                    >
                      Visitar sitio
                    </Button>
                  )}
                </Grid>

                {project.image && (
                  <Grid item xs={12} md={5}>
                    <Box
                      component="img"
                      src={images[project.image]}
                      alt={`Captura de ${project.name}`}
                      loading="lazy"
                      sx={{
                        width: "100%",
                        display: "block",
                        borderRadius: 3,
                        border: "1px solid rgba(255,255,255,0.1)",
                        position: { md: "sticky" },
                        top: { md: 100 },
                      }}
                    />
                  </Grid>
                )}
              </Grid>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
