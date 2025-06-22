import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  Fade,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CloudSyncIcon from "@mui/icons-material/CloudSync";

export default function Hero3({ power }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const stackData = [
    {
      icon: <CodeIcon sx={{ fontSize: 50 }} color="primary" />,
      categoria: "Frontend",
      protagonista: "React, MUI, Hooks",
      tecnologias: "React, JavaScript, TypeScript, accesibilidad",
      contexto:
        "Ideal para construir interfaces responsivas, accesibles y escalables desde cero.",
    },
    {
      icon: <ApiIcon sx={{ fontSize: 50 }} color="primary" />,
      categoria: "Backend / APIs",
      protagonista: "Escalabilidad",
      tecnologias: "Node.js, Express, JWT, validaciones",
      contexto:
        "Diseño de APIs robustas, seguras y listas para múltiples clientes simultáneos.",
    },
    {
      icon: <StorageIcon sx={{ fontSize: 50 }} color="primary" />,
      categoria: "Base de Datos",
      protagonista: "SaaS-ready",
      tecnologias: "MongoDB, Mongoose, estructuras multicliente",
      contexto:
        "Modelado de datos adaptado a plataformas con usuarios y propiedades independientes.",
    },
    {
      icon: (
        <IntegrationInstructionsIcon sx={{ fontSize: 50 }} color="primary" />
      ),
      categoria: "Integraciones",
      protagonista: "Automatización",
      tecnologias: "MercadoPago, Beds24, Webhooks",
      contexto:
        "Conectado a sistemas externos en tiempo real, evitando tareas manuales.",
    },
    {
      icon: <CloudSyncIcon sx={{ fontSize: 50 }} color="primary" />,
      categoria: "DevOps & CI/CD",
      protagonista: "Productivo",
      tecnologias: "GitHub Actions, Docker, testing (en curso)",
      contexto:
        "Automatización de despliegues y control de versiones para entornos profesionales.",
    },
  ];

  const backgroundVariants = {
    fire: `linear-gradient(to bottom, #ff910055, #1a1a1acc)`,
    night: `linear-gradient(to bottom, #121212cc, #000000f2)`,
    tech: `linear-gradient(to bottom, #242424aa, #111111f2)`,
    base: `linear-gradient(to bottom, #121212bb, #1a1a1acc)`,
  };

  return (
    <Box
      sx={{
        minHeight: "110vh",
        backgroundImage: backgroundVariants[power] || backgroundVariants.base,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scrollSnapAlign: "start",
        py: { xs: 6, sm: 8, md: 12 },
        px: { xs: 2, sm: 4, md: 10 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Fade in timeout={1000}>
        <Box mb={6}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            align="center"
            fontWeight="bold"
            color="primary"
            sx={{
              mb: 2,
              textShadow: "0 0 8px rgba(0,0,0,0.4)",
            }}
          >
            Stack robusto, enfocado en resultados
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              mx: "auto",
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Utilizo este stack para construir plataformas escalables, conectadas
            y automatizadas. Cada tecnología fue seleccionada por su robustez,
            comunidad y compatibilidad con sistemas reales en producción como
            Ubika.
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={6} alignItems="flex-start">
        {stackData.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={item.categoria}>
            <Box
              sx={{
                position: "relative",
                pl: 3,
                borderLeft: `2px solid ${theme.palette.primary.main}55`,
                height: "100%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: -8,
                  width: 16,
                  height: 16,
                  bgcolor: theme.palette.primary.main,
                  borderRadius: "50%",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{item.icon}</Box>
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                sx={{ fontSize: { xs: "1.2rem", sm: "1.3rem" } }}
              >
                {item.categoria}
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color="text.primary"
                mt={1}
                sx={{ fontSize: { xs: "1.05rem", sm: "1.15rem" } }}
              >
                {item.protagonista}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                mt={0.5}
                sx={{ fontSize: { xs: "1rem", sm: "1.05rem" } }}
              >
                {item.tecnologias}
              </Typography>
              <Typography
                variant="body2"
                mt={2}
                color="text.secondary"
                sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
              >
                {item.contexto}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
