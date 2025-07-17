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
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
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
    kaio: `linear-gradient(to bottom,rgba(255, 60, 0, 0.31), #000000cc), url(${lay1})`,
    mystic: `linear-gradient(to bottom, #8a2be255, #1a0033cc), url(${lay1})`,
    ultraInstinct: `linear-gradient(to bottom, #00e5ff55, #001f2fcc), url(${lay1})`,
    base: `linear-gradient(to bottom, #00FFC855, #1e1e1ecc), url(${lay1})`,
  };

  const navigate = useNavigate();
  const handleGoToProjects = () => {
    navigate("/projects");
  };

  return (
    <Box
      sx={{
        backgroundImage: backgroundStyles[power] || backgroundStyles.base,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        scrollSnapAlign: "start",
        px: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Fade triggerOnce duration={800}>
              <Typography
                variant={isMobile ? "h4" : "h2"}
                fontWeight="bold"
                sx={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  color: "#fff",
                  textShadow: "0 0 12px rgba(0,0,0,0.5)",
                }}
              >
                Soy Gianfranco Montivero — Full‑Stack Developer con proyectos
                reales en producción
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mt: 3,
                  color: "#f0f0f0",
                  fontWeight: 400,
                  fontSize: isMobile ? "1rem" : "1.25rem",
                }}
              >
                Diseño y desarrollo plataformas web escalables para negocios,
                <br />
                integrando pagos, reservas y dashboards. Todo desde cero.
              </Typography>
            </Fade>
          </Grid>

          <Grid item xs={12}>
            <Slide direction="up" triggerOnce delay={300} duration={600}>
              <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  onClick={scrollToProjects}
                  variant="contained"
                  size="large"
                  color="primary"
                  endIcon={<ArrowDownwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: "30px",
                    fontSize: "1rem",
                    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: `0 0 18px ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  Saber Más
                </Button>
                <Button
                  onClick={handleGoToProjects}
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: "30px",
                    fontSize: "1rem",
                    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: `0 0 18px ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  Proyectos
                </Button>
              </Stack>
            </Slide>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
