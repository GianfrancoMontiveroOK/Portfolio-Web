import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  Fade,
  Stack,
  Chip,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";

export default function Hero3({ power }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const stackData = [
    {
      icon: <CodeIcon sx={{ fontSize: 46 }} color="primary" />,
      categoria: "Frontend",
      protagonista: "Interfaces operativas",
      tecnologias: "React, MUI, Hooks, React Router, contextos",
      contexto:
        "Construcción de paneles claros, responsivos y mantenibles para usuarios reales: administradores, operadores, clientes y perfiles internos.",
    },
    {
      icon: <ApiIcon sx={{ fontSize: 46 }} color="primary" />,
      categoria: "Backend / APIs",
      protagonista: "Reglas de negocio",
      tecnologias: "Node.js, Express, JWT, controladores, servicios",
      contexto:
        "Diseño de APIs separadas por responsabilidad, con validaciones, autenticación y lógica preparada para crecer sin mezclar capas.",
    },
    {
      icon: <StorageIcon sx={{ fontSize: 46 }} color="primary" />,
      categoria: "Base de datos",
      protagonista: "Modelado escalable",
      tecnologias: "MongoDB, Mongoose, esquemas y relaciones operativas",
      contexto:
        "Modelado de entidades, movimientos, reservas, usuarios, roles y datos transaccionales con foco en trazabilidad y evolución del producto.",
    },
    {
      icon: (
        <IntegrationInstructionsIcon sx={{ fontSize: 46 }} color="primary" />
      ),
      categoria: "Integraciones",
      protagonista: "Automatización",
      tecnologias: "Mercado Pago, Beds24, ARCA, webhooks, APIs externas",
      contexto:
        "Conexión con servicios críticos para reducir carga manual, automatizar cobros, sincronizar datos y sostener procesos de negocio.",
    },
    {
      icon: <CloudSyncIcon sx={{ fontSize: 46 }} color="primary" />,
      categoria: "DevOps / Entrega",
      protagonista: "Operación estable",
      tecnologias:
        "Render, variables de entorno, deploys, Git, CI/CD en mejora",
      contexto:
        "Experiencia desplegando y manteniendo sistemas reales, con foco actual en formalizar pipelines, testing y controles de seguridad.",
    },
  ];

  const principles = [
    {
      icon: <AccountTreeRoundedIcon fontSize="small" />,
      label: "Arquitectura modular",
    },
    {
      icon: <ShieldRoundedIcon fontSize="small" />,
      label: "Seguridad y roles",
    },
    {
      icon: <HubRoundedIcon fontSize="small" />,
      label: "Producto escalable",
    },
  ];

  const backgroundVariants = {
    fire: `linear-gradient(to bottom, #ff910055, #1a1a1add)`,
    night: `linear-gradient(to bottom, #121212dd, #000000f2)`,
    tech: `linear-gradient(to bottom, #242424bb, #111111f2)`,
    base: `linear-gradient(to bottom, #121212cc, #1a1a1add)`,
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "110vh",
        backgroundImage: backgroundVariants[power] || backgroundVariants.base,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scrollSnapAlign: "start",
        py: { xs: 7, sm: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 10 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.08), transparent 42%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Box mb={6}>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 3 }}
            >
              {principles.map((item) => (
                <Chip
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  sx={{
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.22)",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                    fontWeight: 600,
                    "& .MuiChip-icon": {
                      color: theme.palette.primary.main,
                    },
                  }}
                />
              ))}
            </Stack>

            <Typography
              variant={isMobile ? "h4" : "h3"}
              align="center"
              fontWeight="bold"
              color="primary"
              sx={{
                mb: 2,
                textShadow: "0 0 8px rgba(0,0,0,0.45)",
                fontFamily: "'Red Hat Display', sans-serif",
                letterSpacing: 0.3,
              }}
            >
              Tecnología con criterio de escala
            </Typography>

            <Typography
              variant="body1"
              align="center"
              sx={{
                maxWidth: 820,
                mx: "auto",
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.7,
              }}
            >
              No elijo tecnologías solo por tendencia: las uso para construir
              productos mantenibles, ordenar reglas de negocio, automatizar
              procesos críticos y preparar sistemas para crecer con claridad.
            </Typography>
          </Box>
        </Fade>

        <Grid
          container
          spacing={4}
          alignItems="stretch"
          justifyContent="center"
        >
          {stackData.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={item.categoria}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  minHeight: 340,
                  p: 3,
                  borderRadius: 4,
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(18,18,18,0.78)"
                      : "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${theme.palette.primary.main}33`,
                  boxShadow: "0 14px 32px rgba(0,0,0,0.18)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 4,
                    bgcolor: theme.palette.primary.main,
                    opacity: 0.8,
                  },
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: `${theme.palette.primary.main}77`,
                    boxShadow: `0 16px 34px ${theme.palette.primary.main}33`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `${theme.palette.primary.main}14`,
                    border: `1px solid ${theme.palette.primary.main}33`,
                    mb: 2.5,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  color="primary"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.25rem" },
                    lineHeight: 1.25,
                  }}
                >
                  {item.categoria}
                </Typography>

                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  color="text.primary"
                  mt={1}
                  sx={{ fontSize: { xs: "1.02rem", sm: "1.08rem" } }}
                >
                  {item.protagonista}
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  mt={0.8}
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1rem" },
                    lineHeight: 1.55,
                  }}
                >
                  {item.tecnologias}
                </Typography>

                <Typography
                  variant="body2"
                  mt={2}
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.92rem", sm: "0.95rem" },
                    lineHeight: 1.65,
                  }}
                >
                  {item.contexto}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          align="center"
          sx={{
            mt: { xs: 5, md: 6 },
            color: "rgba(255,255,255,0.72)",
            fontSize: isMobile ? "0.92rem" : "1rem",
            maxWidth: 780,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          Mi objetivo técnico es que cada sistema sea entendible, mantenible y
          evolutivo: código ordenado, responsabilidades claras, integraciones
          controladas y decisiones alineadas al negocio.
        </Typography>
      </Box>
    </Box>
  );
}
