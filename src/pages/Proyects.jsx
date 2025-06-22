import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const projects = [
  {
    name: "Ubika",
    desc: "Plataforma de reservas hoteleras con gestión multiusuario, pagos, sincronización con Beds24 y panel administrativo.",
    tech: ["React", "Node.js", "MongoDB", "Motor de Reservas", "MercadoPago"],
    link: "https://ubika.site",
  },
  {
    name: "WebProfit",
    desc: "Marca personal de desarrollo web con enfoque en soluciones a medida, automatizaciones y escalabilidad.",
    tech: ["Branding", "Fullstack", "Automatización"],
    link: "https://www.webprofitdesign.com/", // podés agregar luego un sitio portfolio si tenés
  },
  {
    name: "Vitalis",
    desc: "Sitio web para centro médico con múltiples áreas de salud, navegación por servicios y diseño profesional.",
    tech: ["React", "MUI", "Multilenguaje", "Responsive"],
    link: "https://centromedicovitalis.site/",
  },
  {
    name: "Hostal Bichón",
    desc: "Página web para hostal con panel de reservas y motor de sincronización con canales externos.",
    tech: ["Ubika", "Multi-hotel", "Fullstack"],
    link: "https://www.hostalbichon.com/",
  },
  {
    name: "Privilegio Hostal",
    desc: "Evolución centralizada de múltiples propiedades. Web conectada a sistema Ubika con reservas en tiempo real.",
    tech: ["Ubika", "Multi-hotel", "Fullstack"],
    link: "https://www.privilegiohostel.com/",
  },
  {
    name: "Taboada Law",
    desc: "Web para firma legal en EE.UU. con diseño moderno, formulario de contacto y sección de reservas para consultas.",
    tech: ["React", "Responsive", "Legal UX"],
    link: "https://ctaboadalaw.com/",
  },
  {
    name: "Andes Connection",
    desc: "Sistema inmobiliario conectado con una inmobiliaria de EE.UU., con carga de propiedades, filtro de búsqueda y automatización de consultas.",
    tech: ["React", "Node.js", "MongoDB", "CRM", "Automatización"],
    link: "https://andesconnections.net/",
  },
];

export default function Proyectos() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        py: 10,
        px: { xs: 2, sm: 4, md: 10 },
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        fontWeight="bold"
        color="primary"
        align="center"
        gutterBottom
      >
        Proyectos Web Reales
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
      >
        Cada uno de estos proyectos fue desarrollado para resolver necesidades
        concretas. Desde plataformas de reservas hasta sitios médicos y
        jurídicos, aplico diseño funcional, buen código y experiencia de usuario
        real.
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: `0 0 20px ${theme.palette.primary.main}22`,
                },
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  {project.desc}
                </Typography>
                <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
                  {project.tech.map((tech, j) => (
                    <Chip
                      key={j}
                      label={tech}
                      variant="outlined"
                      size="small"
                      sx={{ mb: 1 }}
                    />
                  ))}
                </Stack>
              </Box>
              {project.link !== "#" && (
                <Button
                  href={project.link}
                  target="_blank"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, alignSelf: "flex-start" }}
                >
                  Ver proyecto
                </Button>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
