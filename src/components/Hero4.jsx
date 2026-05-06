import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Stack,
  Paper,
  Chip,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import StorageIcon from "@mui/icons-material/Storage";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";

import imgPanel from "../images/Dashboard.JPG";
import imgPanel2 from "../images/memorialdashboard.png";

export default function Hero4() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeCase, setActiveCase] = React.useState(0);

  const cases = [
    {
      name: "Memorial",
      eyebrow: "Caso principal",
      title: "Sistema operativo, contable y transaccional para gestión interna",
      description:
        "Memorial es el sistema más complejo que desarrollé hasta la fecha. Centraliza clientes, cobros, movimientos, caja, roles, facturación, documentos administrativos e importaciones bancarias. El desafío no fue solo técnico: implicó ordenar procesos reales, modelar reglas de negocio sensibles y construir una plataforma interna mantenible para operación diaria.",
      image: imgPanel2,
      href: "",
      chips: [
        "Sistema en producción",
        "Lógica transaccional",
        "Roles y permisos",
        "Facturación",
      ],
      stats: [
        {
          icon: <AutoAwesomeRoundedIcon color="primary" />,
          label: "Mi rol",
          value: "Arquitectura, backend, frontend y procesos",
        },
        {
          icon: <TimelineRoundedIcon color="primary" />,
          label: "Impacto",
          value: "Digitalización de operación crítica",
        },
        {
          icon: <GroupsRoundedIcon color="primary" />,
          label: "Usuarios",
          value: "Administración, cobradores y perfiles internos",
        },
      ],
      bullets: [
        {
          icon: <AccountBalanceWalletRoundedIcon color="primary" />,
          title: "Cobros, caja y movimientos",
          description:
            "Modelo de movimientos financieros y operativos con ingresos, egresos, estados, roles, caja y trazabilidad.",
        },
        {
          icon: <ReceiptLongRoundedIcon color="primary" />,
          title: "Facturación y documentación",
          description:
            "Generación de comprobantes, PDFs administrativos y flujos conectados a procesos fiscales y documentales.",
        },
        {
          icon: <SyncAltRoundedIcon color="primary" />,
          title: "Importaciones bancarias",
          description:
            "Procesamiento de archivos de débitos automáticos, detección de cobros, rechazos, duplicados y asignación de pagos.",
        },
        {
          icon: <SecurityRoundedIcon color="primary" />,
          title: "Roles, seguridad y operación",
          description:
            "Accesos diferenciados para superadmin, admin y cobradores, con lógica separada por responsabilidades.",
        },
      ],
    },
    {
      name: "Ubika",
      eyebrow: "Producto SaaS",
      title: "Plataforma para ordenar reservas, pagos y operación hotelera",
      description:
        "Ubika nació para resolver un problema concreto: alojamientos con reservas dispersas, tareas manuales, riesgo de solapamientos y poca visibilidad operativa. Diseñé y desarrollé la solución full stack desde cero, conectando producto, arquitectura, frontend, backend, pagos, disponibilidad y experiencia de usuario.",
      image: imgPanel,
      href: "https://ubika.site",
      chips: [
        "Producto real",
        "Usuarios activos",
        "Automatización",
        "Multi-propiedad",
      ],
      stats: [
        {
          icon: <AutoAwesomeRoundedIcon color="primary" />,
          label: "Mi rol",
          value: "Producto, arquitectura y desarrollo full stack",
        },
        {
          icon: <TimelineRoundedIcon color="primary" />,
          label: "Impacto",
          value: "Menos carga manual y más control operativo",
        },
        {
          icon: <GroupsRoundedIcon color="primary" />,
          label: "Usuarios",
          value: "Alojamientos reales en operación",
        },
      ],
      bullets: [
        {
          icon: <AccountTreeIcon color="primary" />,
          title: "Gestión centralizada de reservas",
          description:
            "Reservas sincronizadas con motor propio y conexión operativa con canales externos mediante Beds24.",
        },
        {
          icon: <PaymentIcon color="primary" />,
          title: "Cobros automáticos",
          description:
            "Integración con Mercado Pago, webhooks y flujos de confirmación para reducir intervención manual.",
        },
        {
          icon: <DashboardIcon color="primary" />,
          title: "Dashboard operativo",
          description:
            "Panel administrativo con calendario, disponibilidad, ingresos, usuarios y herramientas de gestión diaria.",
        },
        {
          icon: <StorageIcon color="primary" />,
          title: "Arquitectura multi-propiedad",
          description:
            "Modelo preparado para múltiples alojamientos, usuarios autenticados y reglas de disponibilidad.",
        },
      ],
    },
  ];

  const project = cases[activeCase];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        scrollSnapAlign: "start",
        py: { xs: 7, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
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
          background: `${theme.palette.primary.main}18`,
          filter: "blur(20px)",
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1, width: "100%" }}>
        <Fade in timeout={700}>
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              fontWeight="bold"
              color="primary"
              sx={{
                fontFamily: "'Red Hat Display', sans-serif",
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Casos de estudio destacados
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 820,
                mx: "auto",
                fontSize: { xs: "1rem", sm: "1.08rem" },
                lineHeight: 1.7,
              }}
            >
              Proyectos reales donde combiné desarrollo full stack,
              arquitectura, procesos, automatización y operación.
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              justifyContent="center"
              sx={{ mt: 3 }}
            >
              {cases.map((item, index) => {
                const selected = activeCase === index;

                return (
                  <Button
                    key={item.name}
                    onClick={() => setActiveCase(index)}
                    variant={selected ? "contained" : "outlined"}
                    color="primary"
                    sx={{
                      borderRadius: "999px",
                      px: { xs: 2.5, sm: 4 },
                      py: 1,
                      fontWeight: 700,
                      textTransform: "none",
                    }}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Stack>
          </Box>
        </Fade>

        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          key={project.name}
        >
          <Grid item xs={12} md={6}>
            <Fade in timeout={500}>
              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mb: 2 }}
                >
                  <Chip
                    label={project.eyebrow}
                    color="primary"
                    sx={{ fontWeight: 700 }}
                  />

                  {project.chips.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        border: `1px solid ${theme.palette.primary.main}33`,
                        backgroundColor: `${theme.palette.primary.main}10`,
                      }}
                    />
                  ))}
                </Stack>

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
                  {project.name}
                </Typography>

                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    lineHeight: 1.45,
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.05rem" },
                    lineHeight: 1.75,
                    mb: 3,
                  }}
                >
                  {project.description}
                </Typography>
              </Box>
            </Fade>

            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, sm: 2.5 },
                mb: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.primary.main}22`,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.035)"
                    : "rgba(0,0,0,0.025)",
              }}
            >
              <Stack
                direction="column"
                spacing={2}
                divider={<Divider flexItem />}
              >
                {project.stats.map((stat) => (
                  <Stack
                    key={stat.label}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    {stat.icon}
                    <Box>
                      <Typography fontWeight={700}>{stat.label}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.value}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Paper>

            <Grid container spacing={2}>
              {project.bullets.map((item) => (
                <Grid item xs={12} sm={6} key={item.title}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: 2,
                      borderRadius: 3,
                      border: `1px solid ${theme.palette.primary.main}18`,
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.025)"
                          : "rgba(0,0,0,0.018)",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1.5}
                      alignItems="flex-start"
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: "14px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: `${theme.palette.primary.main}12`,
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Box>
                        <Typography variant="body2" fontWeight={700}>
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mt: 0.5, lineHeight: 1.55 }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {project.href && (
              <Box mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.href}
                  target="_blank"
                  endIcon={<OpenInNewRoundedIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    borderRadius: "30px",
                    textTransform: "none",
                    boxShadow: `0 10px 22px ${theme.palette.primary.main}33`,
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 14px 28px ${theme.palette.primary.main}44`,
                    },
                  }}
                >
                  Ver proyecto
                </Button>
              </Box>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <Slide in direction="left" timeout={600}>
              <Box>
                <Paper
                  elevation={8}
                  sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    border: `1px solid ${theme.palette.primary.main}33`,
                    boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={`Dashboard de ${project.name}`}
                    style={{
                      width: "100%",
                      display: "block",
                    }}
                  />
                </Paper>

                <Typography
                  align="center"
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 2,
                    lineHeight: 1.6,
                  }}
                >
                  {project.name === "Memorial"
                    ? "Panel administrativo para operar cobros, movimientos, clientes, caja, documentación y gestión interna desde una única interfaz."
                    : "Dashboard administrativo para visualizar y operar reservas, ingresos, disponibilidad y gestión diaria desde una única interfaz."}
                </Typography>
              </Box>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
