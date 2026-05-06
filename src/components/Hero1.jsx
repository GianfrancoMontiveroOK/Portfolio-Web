import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  Container,
  Chip,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import lay1 from "../images/background33.jpg";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero1({ power }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const backgroundStyles = {
    kaio: `linear-gradient(to bottom,rgba(255, 60, 0, 0.31), #000000dd), url(${lay1})`,
    mystic: `linear-gradient(to bottom, #8a2be255, #1a0033dd), url(${lay1})`,
    ultraInstinct: `linear-gradient(to bottom, #00e5ff55, #001f2fdd), url(${lay1})`,
    base: `linear-gradient(to bottom, #00FFC855, #1e1e1edd), url(${lay1})`,
  };

  const navigate = useNavigate();

  const handleGoToProjects = () => {
    navigate("/projects");
  };

  const chips = [
    "Full Stack",
    "Producto",
    "Procesos",
    "Escalabilidad",
    "Operación",
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: backgroundStyles[power] || backgroundStyles.base,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        scrollSnapAlign: "start",
        px: 2,
        textAlign: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 45%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Fade triggerOnce duration={800}>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                flexWrap="wrap"
                useFlexGap
                sx={{ mb: 3 }}
              >
                {chips.map((chip) => (
                  <Chip
                    key={chip}
                    label={chip}
                    size={isMobile ? "small" : "medium"}
                    sx={{
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,0.28)",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(8px)",
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Stack>

              <Typography
                variant={isMobile ? "h4" : "h2"}
                fontWeight="bold"
                sx={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  color: "#fff",
                  textShadow: "0 0 18px rgba(0,0,0,0.55)",
                  lineHeight: 1.05,
                  maxWidth: "980px",
                  mx: "auto",
                }}
              >
                Construyo sistemas escalables conectando ingeniería, producto y
                operación.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  color: "#f0f0f0",
                  fontWeight: 400,
                  fontSize: isMobile ? "1rem" : "1.25rem",
                  lineHeight: 1.7,
                  maxWidth: "820px",
                  mx: "auto",
                }}
              >
                Soy Gianfranco Montivero, desarrollador full stack con
                experiencia creando plataformas reales para negocios:
                dashboards, pagos, reservas, automatizaciones, procesos internos
                e integraciones críticas.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "rgba(255,255,255,0.78)",
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  lineHeight: 1.7,
                  maxWidth: "760px",
                  mx: "auto",
                }}
              >
                Mi foco está en ordenar complejidad, transformar necesidades de
                negocio en soluciones técnicas claras y construir productos que
                puedan crecer sin perder control operativo.
              </Typography>

              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 4 }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "999px",
                    backgroundColor: "rgba(0,0,0,0.28)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <WorkspacesRoundedIcon fontSize="small" />
                  <Typography variant="body2" fontWeight={600}>
                    Liderazgo técnico
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "999px",
                    backgroundColor: "rgba(0,0,0,0.28)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <AccountTreeRoundedIcon fontSize="small" />
                  <Typography variant="body2" fontWeight={600}>
                    Arquitectura modular
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "999px",
                    backgroundColor: "rgba(0,0,0,0.28)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <TrendingUpRoundedIcon fontSize="small" />
                  <Typography variant="body2" fontWeight={600}>
                    Visión de escala
                  </Typography>
                </Stack>
              </Stack>
            </Fade>
          </Grid>

          <Grid item xs={12}>
            <Slide direction="up" triggerOnce delay={300} duration={600}>
              <Stack
                direction={isMobile ? "column" : "row"}
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ mt: 3 }}
              >
                <Button
                  onClick={scrollToProjects}
                  variant="contained"
                  size="large"
                  color="primary"
                  endIcon={<ArrowDownwardIcon />}
                  sx={{
                    width: isMobile ? "100%" : "auto",
                    maxWidth: isMobile ? 320 : "none",
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    borderRadius: "30px",
                    fontSize: "1rem",
                    textTransform: "none",
                    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: `0 0 22px ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  Ver casos de liderazgo técnico
                </Button>

                <Button
                  onClick={handleGoToProjects}
                  variant="outlined"
                  size="large"
                  sx={{
                    width: isMobile ? "100%" : "auto",
                    maxWidth: isMobile ? 320 : "none",
                    px: 4,
                    py: 1.5,
                    fontWeight: 700,
                    borderRadius: "30px",
                    fontSize: "1rem",
                    textTransform: "none",
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.55)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      borderColor: "#fff",
                      backgroundColor: "rgba(255,255,255,0.14)",
                    },
                  }}
                >
                  Explorar proyectos
                </Button>
              </Stack>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
