import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import LaunchIcon from "@mui/icons-material/Launch";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CloudIcon from "@mui/icons-material/Cloud";
import { Slide, Fade } from "react-awesome-reveal";

const proyectos = [
  {
    nombre: "Ubika",
    icon: <CloudIcon fontSize="large" />,
    ingreso: "$320/mo USD",
    descripcion:
      "Suite digital para alojamientos turísticos. Permite gestionar reservas, automatizar tareas y centralizar operaciones en una sola plataforma. Actualmente operando en 4 hoteles.",
    link: "https://ubika.app",
    estado: "Activo",
  },
  {
    nombre: "WebProfit",
    icon: <ApartmentIcon fontSize="large" />,
    ingreso: "$120/mo USD",
    descripcion:
      "Agencia de marketing digital enfocada en negocios establecidos. Ofrecemos desarrollo web, creación de contenido y campañas personalizadas para mejorar la presencia online de nuestros clientes.",
    link: "https://webprofitdesign.com",
    estado: "Activo",
  },
  {
    nombre: "Andes Connections",
    icon: <PaidIcon fontSize="large" />,
    ingreso: "$14/mo USD",
    descripcion:
      "Plataforma que conecta propiedades de alta gama en Mendoza con compradores internacionales. Enfocado en ofrecer asesoramiento y oportunidades únicas en bienes raíces.",
    link: "https://andesconnections.com",
    estado: "Activo",
  },
];

export default function ActivosPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 8, sm: 12 },
        bgcolor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Fade triggerOnce>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Proyectos activos
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 700 }}
            >
              Seguimiento en tiempo real de tus proyectos actuales. Visualiza su
              rendimiento económico y accede a sus plataformas activas.
            </Typography>
          </Fade>
        </Grid>

        {proyectos.map((proyecto, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Slide
              direction="up"
              triggerOnce
              delay={index * 100}
              duration={600}
            >
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backdropFilter: "blur(6px)",
                  background:
                    theme.palette.mode === "dark"
                      ? "#ffffff08"
                      : "rgba(255,255,255,0.7)",
                  boxShadow: `0 0 25px ${theme.palette.primary.main}22`,
                  height: "100%",
                }}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    {proyecto.icon}
                    <Typography variant="h5" fontWeight="bold">
                      {proyecto.nombre}
                    </Typography>
                    <Chip label={proyecto.estado} color="success" />
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {proyecto.descripcion}
                  </Typography>

                  <Stack direction="row" spacing={1} alignItems="center">
                    <PaidIcon color="primary" />
                    <Typography variant="h6" fontWeight="medium">
                      {proyecto.ingreso}
                    </Typography>
                  </Stack>

                  <Button
                    variant="outlined"
                    endIcon={<LaunchIcon />}
                    href={proyecto.link}
                    target="_blank"
                    sx={{
                      borderRadius: "30px",
                      mt: 1,
                      textTransform: "none",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "#fff",
                      },
                    }}
                  >
                    Ir al proyecto
                  </Button>
                </Stack>
              </Paper>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
