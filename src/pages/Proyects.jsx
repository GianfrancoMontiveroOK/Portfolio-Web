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

import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";

const projects = [
  {
    name: "Ubika",
    type: "Producto SaaS",
    icon: <HotelRoundedIcon />,
    desc: "Plataforma de reservas hoteleras con gestión multiusuario, pagos, sincronización con Beds24, motor de reservas y panel administrativo.",
    impact:
      "Centraliza operación, reduce tareas manuales y mejora el control de reservas, pagos y disponibilidad.",
    tech: ["React", "Node.js", "MongoDB", "Beds24", "Mercado Pago", "Webhooks"],
    link: "https://ubika.site",
  },
  {
    name: "Memorial",
    type: "Sistema operativo",
    icon: <BusinessRoundedIcon />,
    desc: "Sistema interno para gestión administrativa, cobros, movimientos, caja, documentación, roles e importaciones bancarias.",
    impact:
      "Digitaliza procesos críticos, mejora trazabilidad y ordena operaciones sensibles de administración.",
    tech: ["React", "Node.js", "MongoDB", "Cobros", "Facturación", "Roles"],
    link: "https://www.memorialsanrafael.com.ar/",
  },
  {
    name: "WebProfit",
    type: "Negocio digital",
    icon: <WebRoundedIcon />,
    desc: "Marca de desarrollo web, automatización y estrategia digital para negocios establecidos que necesitan modernizar su presencia online.",
    impact:
      "Conecta desarrollo, contenido, campañas y procesos comerciales en soluciones digitales concretas.",
    tech: ["Branding", "Full Stack", "Marketing", "Automatización", "Clientes"],
    link: "https://www.webprofitdesign.com/",
  },
  {
    name: "Bots de WhatsApp",
    type: "Automatización comercial",
    icon: <SmartToyRoundedIcon />,
    desc: "Diseño de flujos automatizados para atención, captación de leads, respuestas frecuentes, derivación comercial y seguimiento de interesados.",
    impact:
      "Reduce fricción comercial, acelera respuestas y permite ordenar conversaciones entrantes desde campañas o sitios web.",
    tech: ["WhatsApp", "ManyChat", "Twilio", "Leads", "CRM", "Automatización"],
    link: "#",
  },
  {
    name: "Estrategias de marketing",
    type: "Growth / Performance",
    icon: <CampaignRoundedIcon />,
    desc: "Planificación de campañas, funnels, contenido, anuncios, formularios de captación y seguimiento comercial para negocios reales.",
    impact:
      "Permite validar ofertas, atraer prospectos, medir interés real y conectar adquisición con operación.",
    tech: ["Meta Ads", "Funnels", "Contenido", "Leads", "Landing Pages", "CRM"],
    link: "#",
  },
  {
    name: "Vitalis",
    type: "Web institucional",
    icon: <MedicalServicesRoundedIcon />,
    desc: "Sitio web para centro médico con múltiples áreas de salud, navegación por servicios, diseño profesional y estructura orientada a conversión.",
    impact:
      "Mejora presencia digital, claridad institucional y captación de pacientes/profesionales.",
    tech: ["React", "MUI", "Responsive", "UX", "Salud"],
    link: "https://centromedicovitalis.site/",
  },
  {
    name: "Hostal Bichón",
    type: "Web + reservas",
    icon: <HotelRoundedIcon />,
    desc: "Página web para hostal con integración al ecosistema Ubika y estructura preparada para reservas online.",
    impact:
      "Convierte una web institucional en un canal operativo conectado a gestión de reservas.",
    tech: ["Ubika", "Reservas", "Full Stack", "Hospitality"],
    link: "https://www.hostalbichon.com/",
  },
  {
    name: "Privilegio Hostel",
    type: "Web + operación",
    icon: <HotelRoundedIcon />,
    desc: "Web conectada a sistema Ubika con reservas en tiempo real, estructura turística y operación centralizada.",
    impact:
      "Integra presencia digital, reservas y gestión operativa en una misma solución.",
    tech: ["Ubika", "Reservas", "Pagos", "Full Stack"],
    link: "https://www.privilegiohostel.com/",
  },
  {
    name: "Taboada Law",
    type: "Web profesional",
    icon: <GavelRoundedIcon />,
    desc: "Web para firma legal en Estados Unidos con diseño moderno, formulario de contacto y estructura orientada a consultas.",
    impact:
      "Profesionaliza la presencia online y facilita la captación de potenciales clientes.",
    tech: ["React", "Responsive", "Legal UX", "Formulario"],
    link: "https://ctaboadalaw.com/",
  },
];

export default function Proyectos() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
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
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" mb={6}>
          <Chip
            label="Software, automatización y crecimiento digital"
            color="primary"
            sx={{
              fontWeight: 700,
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
            Proyectos reales con impacto operativo
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{
              maxWidth: 820,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.08rem" },
              lineHeight: 1.8,
            }}
          >
            Estos proyectos combinan desarrollo web, sistemas internos,
            automatización comercial, bots de WhatsApp, campañas digitales y
            estrategia de producto. Mi enfoque es construir soluciones que no
            solo se vean bien, sino que ayuden a operar, vender, medir y crecer.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.name}>
              <Paper
                elevation={6}
                sx={{
                  p: { xs: 3, sm: 3.5 },
                  borderRadius: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,0.04)"
                      : "rgba(255,255,255,0.78)",
                  border: `1px solid ${theme.palette.primary.main}18`,
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 14px 32px ${theme.palette.primary.main}25`,
                    borderColor: `${theme.palette.primary.main}55`,
                  },
                }}
              >
                <Stack spacing={2} height="100%">
                  <Stack
                    direction="row"
                    spacing={1.5}
                    alignItems="flex-start"
                    justifyContent="space-between"
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: theme.palette.primary.main,
                          backgroundColor: `${theme.palette.primary.main}12`,
                          border: `1px solid ${theme.palette.primary.main}22`,
                          flexShrink: 0,
                        }}
                      >
                        {project.icon}
                      </Box>

                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          color="primary"
                          sx={{ lineHeight: 1.2 }}
                        >
                          {project.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 0.4 }}
                        >
                          {project.type}
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                    }}
                  >
                    {project.desc}
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
                      border: `1px solid ${theme.palette.primary.main}14`,
                    }}
                  >
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      color="text.primary"
                      sx={{ mb: 0.6 }}
                    >
                      Impacto
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                      }}
                    >
                      {project.impact}
                    </Typography>
                  </Paper>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ pt: 0.5 }}
                  >
                    {project.tech.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        variant="outlined"
                        size="small"
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          borderColor: `${theme.palette.primary.main}33`,
                          color: theme.palette.primary.main,
                          backgroundColor: `${theme.palette.primary.main}08`,
                        }}
                      />
                    ))}
                  </Stack>

                  <Box sx={{ flexGrow: 1 }} />

                  {project.link !== "#" && project.link && (
                    <Button
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      color="primary"
                      endIcon={<LaunchRoundedIcon />}
                      sx={{
                        mt: 2,
                        alignSelf: isMobile ? "stretch" : "flex-start",
                        borderRadius: "30px",
                        px: 3,
                        py: 1.2,
                        textTransform: "none",
                        fontWeight: 700,
                        boxShadow: `0 10px 22px ${theme.palette.primary.main}22`,
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: `0 14px 28px ${theme.palette.primary.main}33`,
                        },
                      }}
                    >
                      Ver proyecto
                    </Button>
                  )}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
