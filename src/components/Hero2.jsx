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
} from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import TimerOffIcon from "@mui/icons-material/TimerOff";
import PaidIcon from "@mui/icons-material/Paid";
import InsightsIcon from "@mui/icons-material/Insights";
import lay3 from "../images/background1111.png";

export default function Hero2({ power }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const results = [
    {
      title: "+2 hoteles activos usando Ubika",
      subtitle: "+30 reservas mensuales automatizadas",
      icon: <HotelIcon sx={{ fontSize: 40 }} color="primary" />,
    },
    {
      title: "-70% en gestión manual",
      subtitle: "Gracias a integración directa con Motor de Reservas",
      icon: <TimerOffIcon sx={{ fontSize: 40 }} color="primary" />,
    },
    {
      title: "Cobros 100% automáticos",
      subtitle: "Sin intervención, vía Mercado Pago + webhooks ",
      icon: <PaidIcon sx={{ fontSize: 40 }} color="primary" />,
    },
    {
      title: "Dashboard con visión 360°",
      subtitle: "Reportes de ingresos, usuarios y reservas en tiempo real",
      icon: <InsightsIcon sx={{ fontSize: 40 }} color="primary" />,
    },
  ];

  const backgroundVariants = {
    fire: `linear-gradient(to bottom, #ff6f0055, #1a1a1acc), url(${lay3})`,
    ice: `linear-gradient(to bottom, #00bcd455, #003344cc), url(${lay3})`,
    light: `linear-gradient(to bottom, #fff9c488, #fefae0cc), url(${lay3})`,
    dark: `linear-gradient(to bottom, #121212dd, #000000ee), url(${lay3})`,
    base: `linear-gradient(to bottom, #121212bb, #1a1a1acc), url(${lay3})`,
  };

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        backgroundImage: backgroundVariants[power] || backgroundVariants.base,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scrollSnapAlign: "start",
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Fade in timeout={1000}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          align="center"
          fontWeight="bold"
          color="primary"
          sx={{
            mb: { xs: 4, sm: 6 },
            textShadow: "0 0 8px rgba(0,0,0,0.4)",
            letterSpacing: 1,
          }}
        >
          Resultados Reales
        </Typography>
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
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  bgcolor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.primary.main}33`,
                  maxWidth: 300,
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: `0 10px 20px ${theme.palette.primary.main}44`,
                  },
                }}
              >
                {item.icon}
                <Typography
                  variant="h6"
                  mt={2}
                  fontWeight="bold"
                  color="text.primary"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  mt={1}
                  color="text.secondary"
                  sx={{ fontSize: "0.95rem" }}
                >
                  {item.subtitle}
                </Typography>
              </Paper>
            </Slide>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
