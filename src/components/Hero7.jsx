import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Fade,
  Paper,
  Stack,
  useMediaQuery,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Hero7() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "90vh",
        bgcolor: theme.palette.background.default,
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 6, sm: 10 },
      }}
    >
      <Stack
        spacing={6}
        alignItems="center"
        sx={{ width: "100%", maxWidth: 1100 }}
      >
        <Fade in timeout={1000}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            fontWeight="bold"
            color="primary"
            textAlign="center"
          >
            Mi constancia como desarrollador
          </Typography>
        </Fade>

        <Fade in timeout={1500}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", sm: "1.15rem" },
              textAlign: "center",
              maxWidth: 750,
              lineHeight: 1.8,
            }}
          >
            La programación es parte de mi día a día. Este gráfico refleja mi
            compromiso real con el desarrollo continuo, ya sea creando productos
            propios, trabajando para clientes o mejorando plataformas ya en
            producción.
          </Typography>
        </Fade>

        <Fade in timeout={1800}>
          <Paper
            elevation={8}
            sx={{
              p: 4,
              borderRadius: 4,
              width: "100%",
              maxWidth: 850,
              background: `${
                theme.palette.mode === "dark" ? "#ffffff09" : "#f9f9f9"
              }`,
              border: `1px solid ${theme.palette.primary.main}22`,
              boxShadow: `0 0 20px ${theme.palette.primary.main}25`,
            }}
          >
            <Box
              component="iframe"
              src="https://ghchart.rshah.org/31c48f/GianfrancoMontiveroOK"
              title="GitHub contributions"
              sx={{
                border: "none",
                width: "100%",
                height: 250,
                filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
              }}
            />
          </Paper>
        </Fade>

        <Fade in timeout={2000}>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="center"
            mt={2}
            flexWrap="wrap"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <CodeIcon color="primary" />
              <Typography variant="subtitle2" color="text.secondary">
                Más de 1 año contribuyendo activamente
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarMonthIcon color="primary" />
              <Typography variant="subtitle2" color="text.secondary">
                Actividad diaria con foco en producción
              </Typography>
            </Stack>
            <Typography variant="caption" color="text.secondary" mt={1}>
              * Algunas contribuciones privadas no se muestran en este gráfico
              por configuración de privacidad.
            </Typography>
          </Stack>
        </Fade>
      </Stack>
    </Box>
  );
}
