import React from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Fade,
  Paper,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Hero5() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        scrollSnapAlign: "start",
        py: { xs: 6, sm: 8 },
        px: { xs: 2, sm: 4, md: 10 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* IZQUIERDA – HISTORIA Y VALORES */}
        <Grid item xs={12} md={7}>
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                fontWeight="bold"
                color="primary"
                gutterBottom
              >
                Trayectoria & Valores
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                Desde adolescente, siempre me manejé de forma autodidacta. En la
                secundaria, comencé creando proyectos propios sin recursos, pero
                con mucha curiosidad. Con el tiempo, pasé de prototipos a
                sistemas reales, funcionales y rentables como Ubika. Me gusta
                entender las necesidades de fondo y transformarlas en productos
                funcionales desde cero.
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.primary"
                fontWeight={600}
                sx={{ mb: 1, mt: 4 }}
              >
                Soft skills que me definen:
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "1rem" }}
              >
                • Autodidacta <br />
                • Resiliente <br />
                • Enfocado en soluciones reales <br />• Capaz de transformar
                necesidad en producto
              </Typography>
            </Box>
          </Fade>
        </Grid>

        {/* DERECHA – TESTIMONIAL */}
        <Grid item xs={12} md={5}>
          <Fade in timeout={1200}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 4,
                backdropFilter: "blur(6px)",
                background: `${
                  theme.palette.mode === "dark" ? "#ffffff0a" : "#00000005"
                }`,
                border: `1px solid ${theme.palette.primary.main}33`,
                boxShadow: `0 0 20px ${theme.palette.primary.main}22`,
              }}
            >
              <FormatQuoteIcon
                sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }}
              />
              <Typography
                variant="body1"
                color="text.primary"
                fontStyle="italic"
                sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}
              >
                “Gianfranco transformó cómo gestionamos reservas, automatizó
                pagos y redujo errores manuales. Hoy nuestro sistema funciona
                casi solo.”
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mt: 2, textAlign: "right", fontStyle: "normal" }}
              >
                — Cliente de Ubika
              </Typography>
            </Paper>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}
