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
import LaunchIcon from "@mui/icons-material/Launch";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CloudIcon from "@mui/icons-material/Cloud";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import { Slide, Fade } from "react-awesome-reveal";

const proyectos = [
  {
    nombre: "Memorial",
    icon: <AccountBalanceRoundedIcon fontSize="large" />,
    tipo: "Sistema operativo / transaccional",
    rol: "Arquitectura, backend, frontend y procesos",
    descripcion:
      "Sistema interno para gestión administrativa, cobros, movimientos, caja, facturación, documentación, importaciones bancarias y roles operativos. Es el proyecto más complejo que desarrollé hasta la fecha.",
    impacto:
      "Digitalización de procesos críticos, trazabilidad de operaciones y centralización de tareas administrativas.",
    link: "https://www.memorialsanrafael.com.ar/",
    estado: "En producción",
    tags: ["Node.js", "React", "MongoDB", "Roles", "Cobros", "Facturación"],
  },
  {
    nombre: "Ubika",
    icon: <CloudIcon fontSize="large" />,
    tipo: "SaaS para alojamientos",
    rol: "Producto, arquitectura y desarrollo full stack",
    descripcion:
      "Suite digital para alojamientos turísticos. Permite gestionar reservas, disponibilidad, pagos, usuarios y operaciones desde una plataforma centralizada.",
    impacto:
      "Reducción de carga manual, automatización de reservas y mayor control operativo para alojamientos reales.",
    link: "https://www.ubikamanagement.com/",
    estado: "Activo",
    tags: ["React", "Node.js", "MongoDB", "Mercado Pago", "Beds24", "Webhooks"],
  },
  {
    nombre: "WebProfit",
    icon: <ApartmentIcon fontSize="large" />,
    tipo: "Servicios digitales",
    rol: "Dirección de proyectos, desarrollo y estrategia",
    descripcion:
      "Proyecto desde el cual desarrollo sitios, campañas, automatizaciones y soluciones digitales para negocios establecidos que necesitan mejorar su presencia online.",
    impacto:
      "Coordinación de entregas, comunicación con clientes, planificación de contenido y construcción de soluciones comerciales.",
    link: "https://webprofitdesign.com",
    estado: "Activo",
    tags: ["Producto", "Clientes", "Marketing", "Web", "Automatización"],
  },
];

export default function ActivosPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 8, sm: 12 },
        bgcolor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 420,
          height: 420,
          borderRadius: "50%",
          right: -160,
          top: -120,
          background: `${theme.palette.primary.main}14`,
          filter: "blur(20px)",
          pointerEvents: "none",
        },
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid item xs={12}>
          <Fade triggerOnce>
            <Stack spacing={2} sx={{ maxWidth: 850 }}>
              <Chip
                icon={<EngineeringRoundedIcon />}
                label="Proyectos reales en operación"
                color="primary"
                sx={{
                  width: "fit-content",
                  fontWeight: 700,
                  "& .MuiChip-icon": {
                    color: "#fff",
                  },
                }}
              />

              <Typography
                variant={isMobile ? "h4" : "h3"}
                fontWeight="bold"
                color="primary"
                gutterBottom
                sx={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  lineHeight: 1.1,
                }}
              >
                Productos y sistemas activos
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  maxWidth: 780,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  lineHeight: 1.8,
                }}
              >
                Estos proyectos muestran mi experiencia construyendo software
                real: sistemas operativos, plataformas SaaS, paneles internos,
                integraciones, automatizaciones y productos conectados a
                necesidades concretas de negocio.
              </Typography>
            </Stack>
          </Fade>
        </Grid>

        {proyectos.map((proyecto, index) => (
          <Grid item xs={12} md={6} key={proyecto.nombre}>
            <Slide
              direction="up"
              triggerOnce
              delay={index * 100}
              duration={600}
            >
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 4,
                  backdropFilter: "blur(8px)",
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0.76)",
                  border: `1px solid ${theme.palette.primary.main}22`,
                  boxShadow: `0 0 25px ${theme.palette.primary.main}18`,
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 14px 32px ${theme.palette.primary.main}28`,
                    borderColor: `${theme.palette.primary.main}55`,
                  },
                }}
              >
                <Stack spacing={2.2} height="100%">
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="flex-start"
                    justifyContent="space-between"
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          width: 54,
                          height: 54,
                          borderRadius: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: theme.palette.primary.main,
                          backgroundColor: `${theme.palette.primary.main}12`,
                          border: `1px solid ${theme.palette.primary.main}22`,
                          flexShrink: 0,
                        }}
                      >
                        {proyecto.icon}
                      </Box>

                      <Box>
                        <Typography variant="h5" fontWeight="bold">
                          {proyecto.nombre}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 0.3 }}
                        >
                          {proyecto.tipo}
                        </Typography>
                      </Box>
                    </Stack>

                    <Chip
                      label={proyecto.estado}
                      color={
                        proyecto.estado === "En producción"
                          ? "success"
                          : "primary"
                      }
                      size="small"
                      sx={{
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                    }}
                  >
                    {proyecto.descripcion}
                  </Typography>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.035)"
                          : "rgba(0,0,0,0.025)",
                      border: `1px solid ${theme.palette.primary.main}16`,
                    }}
                  >
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <EngineeringRoundedIcon
                          color="primary"
                          fontSize="small"
                        />
                        <Typography variant="body2" fontWeight={700}>
                          Rol
                        </Typography>
                      </Stack>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {proyecto.rol}
                      </Typography>
                    </Stack>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.035)"
                          : "rgba(0,0,0,0.025)",
                      border: `1px solid ${theme.palette.primary.main}16`,
                    }}
                  >
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AutoGraphRoundedIcon
                          color="primary"
                          fontSize="small"
                        />
                        <Typography variant="body2" fontWeight={700}>
                          Impacto
                        </Typography>
                      </Stack>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {proyecto.impacto}
                      </Typography>
                    </Stack>
                  </Paper>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ pt: 0.5 }}
                  >
                    {proyecto.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                          backgroundColor: `${theme.palette.primary.main}10`,
                          border: `1px solid ${theme.palette.primary.main}22`,
                        }}
                      />
                    ))}
                  </Stack>

                  <Box sx={{ flexGrow: 1 }} />

                  {proyecto.link && (
                    <Button
                      variant="outlined"
                      endIcon={<LaunchIcon />}
                      href={proyecto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: isMobile ? "100%" : "fit-content",
                        borderRadius: "30px",
                        mt: 1,
                        px: 3,
                        py: 1.2,
                        textTransform: "none",
                        fontWeight: 700,
                        "&:hover": {
                          backgroundColor: theme.palette.primary.main,
                          color: "#fff",
                        },
                      }}
                    >
                      Ir al proyecto
                    </Button>
                  )}
                </Stack>
              </Paper>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
