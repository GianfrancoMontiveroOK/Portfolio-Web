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
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { Link } from "react-router-dom";

import SectionHeading from "./SectionHeading";
import memorialImage from "../images/memorial-dashboard.webp";
import ubikaImage from "../images/ubika-dashboard.webp";
import { featuredProjects } from "../data/portfolioData";

const projectImages = {
  memorial: memorialImage,
  ubika: ubikaImage,
};

export default function Hero4() {
  return (
    <Box component="section" id="featured-projects" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Casos destacados"
          title="Proyectos donde participé de la solución completa."
          description="Estos casos permiten evaluar mi aporte, las decisiones que asumí y el tipo de problemas que puedo resolver dentro de un equipo."
        />

        <Stack spacing={4} sx={{ mt: 5 }}>
          {featuredProjects.slice(0, 2).map((project, index) => (
            <Paper
              key={project.id}
              variant="outlined"
              sx={{
                p: { xs: 2, md: 3 },
                overflow: "hidden",
                borderColor: "rgba(255,255,255,0.09)",
                bgcolor: "rgba(255,255,255,0.02)",
              }}
            >
              <Grid container spacing={{ xs: 3, md: 5 }} alignItems="center" direction={index % 2 ? "row-reverse" : "row"}>
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src={projectImages[project.image]}
                    alt={`Vista del proyecto ${project.name}`}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      display: "block",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 24px 60px rgba(0,0,0,0.32)",
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography color="primary.main" fontWeight={800} variant="overline">
                    {project.eyebrow}
                  </Typography>
                  <Typography component="h3" variant="h4" fontWeight={800} sx={{ mt: 0.5 }}>
                    {project.name}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>
                    {project.summary}
                  </Typography>
                  <Typography fontWeight={700} sx={{ mt: 2.5 }}>
                    Mi participación
                  </Typography>
                  <List dense disablePadding sx={{ mt: 0.5 }}>
                    {project.responsibilities.slice(0, 3).map((responsibility) => (
                      <ListItem key={responsibility} disableGutters alignItems="flex-start">
                        <ListItemIcon sx={{ minWidth: 30, mt: 0.25 }}>
                          <CheckCircleOutlineRoundedIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={responsibility}
                          primaryTypographyProps={{ color: "text.secondary", lineHeight: 1.55 }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mt: 2 }}>
                    {project.technologies.map((technology) => (
                      <Chip key={technology} label={technology} size="small" />
                    ))}
                  </Stack>
                  <Button
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewRoundedIcon />}
                    sx={{ mt: 2.5, px: 0 }}
                  >
                    Visitar proyecto
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Stack>

        <Button component={Link} to="/projects" endIcon={<ArrowForwardRoundedIcon />} sx={{ mt: 4 }}>
          Ver todos los proyectos y responsabilidades
        </Button>
      </Container>
    </Box>
  );
}
