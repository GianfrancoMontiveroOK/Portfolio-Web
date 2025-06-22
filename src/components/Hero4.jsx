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
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import StorageIcon from "@mui/icons-material/Storage";
import imgPanel from "../images/Dashboard.JPG"; // ⬅️ Reemplazar con imagen real del dashboard

export default function Hero4() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const bullets = [
    {
      icon: <AccountTreeIcon color="primary" />,
      title:
        "Reserva y sincronización con Motor de Reservas (Conexion a Booking, Airbnb y mas de 50 OTAs)",
    },
    {
      icon: <PaymentIcon color="primary" />,
      title: "Cobro automático con Mercado Pago + Webhooks",
    },
    {
      icon: <DashboardIcon color="primary" />,
      title: "Dashboard con KPIs, rendimiento y reportes",
    },
    {
      icon: <StorageIcon color="primary" />,
      title: "Multi-propiedad, multi-usuario, acceso autenticado",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        scrollSnapAlign: "start",
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 4, md: 10 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* IZQUIERDA – TEXTO */}
        <Grid item xs={12} md={6}>
          <Fade in timeout={800}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Caso de estudio: Ubika
            </Typography>
          </Fade>

          <Fade in timeout={1200}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: "1rem", sm: "1.1rem" }, mb: 4 }}
            >
              Ubika es una plataforma creada para automatizar la gestión
              hotelera de forma profesional. Desde reservas hasta cobros, todo
              se integra y sincroniza. Desarrollé esta solución full stack desde
              cero, optimizando procesos manuales y permitiendo a los negocios
              operar 24/7 con mínimo esfuerzo. Actualmente en producción, maneja
              múltiples propiedades con flujos de pago, reportes, usuarios y
              reservas centralizadas.
            </Typography>
          </Fade>

          <Stack spacing={2}>
            {bullets.map((item, i) => (
              <Slide in direction="right" timeout={1000 + i * 300} key={i}>
                <Stack direction="row" spacing={2} alignItems="center">
                  {item.icon}
                  <Typography variant="body1" fontWeight={500}>
                    {item.title}
                  </Typography>
                </Stack>
              </Slide>
            ))}
          </Stack>

          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              href="https://ubika.site" // o link al GitHub/demo real
              target="_blank"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderRadius: "30px",
              }}
            >
              Ver demo / código
            </Button>
          </Box>
        </Grid>

        {/* DERECHA – IMAGEN/MOCKUP */}
        <Grid item xs={12} md={6}>
          <Slide in direction="left" timeout={1000}>
            <Paper
              elevation={6}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                transform: "scale(1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: `0 8px 24px ${theme.palette.primary.main}55`,
                },
              }}
            >
              <img
                src={imgPanel}
                alt="Ubika dashboard"
                style={{ width: "100%", display: "block" }}
              />
            </Paper>
          </Slide>
        </Grid>
      </Grid>
    </Box>
  );
}
