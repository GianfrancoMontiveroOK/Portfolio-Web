import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  Fade,
  Slide,
  Stack,
  Chip,
} from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import PaidIcon from "@mui/icons-material/Paid";
import InsightsIcon from "@mui/icons-material/Insights";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import lay3 from "../images/background1111.png";

export default function Hero2({ power }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const results = [
    {
      title: "+2 alojamientos activos",
      subtitle:
        "Ubika se validó con usuarios reales, reservas operativas y necesidades concretas de gestión.",
      icon: <HotelIcon sx={{ fontSize: 40 }} color="primary" />,
    },
    {
      title: "-70% de gestión manual",
      subtitle:
        "Automatización de reservas, disponibilidad y cobros para reducir tareas repetitivas del equipo operativo.",
      icon: <TimerOffIcon sx={{ fontSize: 40 }} color="primary" />,
    },
    {
      title: "Pagos automatizados",
      subtitle:
        "Integración con Mercado Pago, webhooks y flujos de confirmación para reservas sin intervención manual.",
      icon: <PaidIcon sx={{ fontSize: 40 }} color="primary" />,
    },
    {
      title: "Dashboard operativo",
      subtitle:
        "Panel con reservas, ingresos, usuarios, disponibilidad y datos clave para tomar decisiones rápidas.",
      icon: <InsightsIcon sx={{ fontSize: 40 }} color="primary" />,
    },
  ];

  const backgroundVariants = {
    fire: `linear-gradient(to bottom, #ff6f0055, #1a1a1add), url(${lay3})`,
    ice: `linear-gradient(to bottom, #00bcd455, #003344dd), url(${lay3})`,
    light: `linear-gradient(to bottom, #fff9c488, #fefae0cc), url(${lay3})`,
    dark: `linear-gradient(to bottom, #121212dd, #000000ee), url(${lay3})`,
    base: `linear-gradient(to bottom, #121212cc, #1a1a1add), url(${lay3})`,
  };

  return (
    <Box
      id="projects"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        backgroundImage: backgroundVariants[power] || backgroundVariants.base,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scrollSnapAlign: "start",
        py: { xs: 7, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 48%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Fade in timeout={1000}>
          <Box>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 3 }}
            >
              <Chip
                icon={<WorkspacesRoundedIcon />}
                label="Producto real"
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

              <Chip
                icon={<AccountTreeRoundedIcon />}
                label="Procesos escalables"
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
            </Stack>

            <Typography
              variant={isMobile ? "h4" : "h3"}
              align="center"
              fontWeight="bold"
              color="primary"
              sx={{
                mb: 2,
                textShadow: "0 0 8px rgba(0,0,0,0.45)",
                letterSpacing: 0.5,
                fontFamily: "'Red Hat Display', sans-serif",
              }}
            >
              Impacto real en operación
            </Typography>

            <Typography
              align="center"
              sx={{
                color: "rgba(255,255,255,0.82)",
                maxWidth: 820,
                mx: "auto",
                mb: { xs: 4, sm: 6 },
                fontSize: isMobile ? "1rem" : "1.15rem",
                lineHeight: 1.7,
              }}
            >
              Estos proyectos no fueron ejercicios aislados: resolvieron
              problemas reales de negocio, redujeron carga manual y conectaron
              desarrollo, producto y operación en una misma solución.
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4} justifyContent="center">
          {results.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              key={item.title}
              display="flex"
              justifyContent="center"
            >
              <Slide in direction="up" timeout={700 + i * 250}>
                <Paper
                  elevation={6}
                  sx={{
                    width: "100%",
                    height: "100%",
                    p: { xs: 3, sm: 4 },
                    borderRadius: 4,
                    textAlign: "center",
                    bgcolor:
                      theme.palette.mode === "dark"
                        ? "rgba(18,18,18,0.86)"
                        : "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${theme.palette.primary.main}33`,
                    maxWidth: 320,
                    minHeight: 250,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: `0 12px 28px ${theme.palette.primary.main}44`,
                      borderColor: `${theme.palette.primary.main}77`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: `${theme.palette.primary.main}14`,
                      border: `1px solid ${theme.palette.primary.main}33`,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    mt={2.5}
                    fontWeight="bold"
                    color="text.primary"
                    sx={{
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    mt={1.5}
                    color="text.secondary"
                    sx={{
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
          ))}
        </Grid>

        <Typography
          align="center"
          sx={{
            mt: { xs: 5, md: 6 },
            color: "rgba(255,255,255,0.72)",
            fontSize: isMobile ? "0.92rem" : "1rem",
            maxWidth: 760,
            mx: "auto",
            lineHeight: 1.7,
          }}
        >
          Mi diferencial está en construir soluciones técnicas que no se quedan
          en el código: ordenan procesos, mejoran la gestión diaria y preparan
          el producto para crecer.
        </Typography>
      </Box>
    </Box>
  );
}
