import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Fade,
  Paper,
  Stack,
  useMediaQuery,
  Chip,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";

export default function Hero7() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "90vh",
        bgcolor: theme.palette.background.default,
        scrollSnapAlign: "start",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 6, md: 10 },
        py: { xs: 7, sm: 10 },
        "&::before": {
          content: '""',
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          right: -140,
          bottom: -140,
          background: `${theme.palette.primary.main}14`,
          filter: "blur(18px)",
          pointerEvents: "none",
        },
      }}
    >
      <Stack
        spacing={4}
        alignItems="center"
        sx={{
          width: "100%",
          maxWidth: 1100,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Fade in timeout={1000}>
          <Box textAlign="center">
            <Chip
              icon={<GitHubIcon />}
              label="Evidencia pública de actividad técnica"
              color="primary"
              sx={{
                mb: 2,
                fontWeight: 700,
                "& .MuiChip-icon": {
                  color: "#fff",
                },
              }}
            />

            <Typography
              variant={isMobile ? "h4" : "h3"}
              fontWeight="bold"
              color="primary"
              textAlign="center"
              sx={{
                fontFamily: "'Red Hat Display', sans-serif",
                lineHeight: 1.1,
              }}
            >
              Disciplina técnica sostenida
            </Typography>
          </Box>
        </Fade>

        <Fade in timeout={1500}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "1rem", sm: "1.15rem" },
              textAlign: "center",
              maxWidth: 780,
              lineHeight: 1.8,
            }}
          >
            La programación forma parte de mi trabajo diario. Esta actividad
            refleja continuidad, iteración y mejora constante sobre productos
            propios, sistemas para clientes y plataformas reales en producción.
          </Typography>
        </Fade>

        <Fade in timeout={1800}>
          <Paper
            elevation={8}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: 4,
              width: "100%",
              maxWidth: 900,
              overflow: "hidden",
              background:
                theme.palette.mode === "dark" ? "#ffffff09" : "#f9f9f9",
              border: `1px solid ${theme.palette.primary.main}22`,
              boxShadow: `0 0 20px ${theme.palette.primary.main}25`,
            }}
          >
            <Box
              component="img"
              src="https://ghchart.rshah.org/31c48f/GianfrancoMontiveroOK"
              alt="GitHub contributions de Gianfranco Montivero"
              sx={{
                display: "block",
                width: "100%",
                minWidth: isMobile ? 720 : "100%",
                height: "auto",
              }}
            />
          </Paper>
        </Fade>

        <Fade in timeout={2000}>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            sx={{ mt: 1 }}
          >
            <Paper
              elevation={0}
              sx={{
                px: 2.5,
                py: 1.5,
                borderRadius: "999px",
                border: `1px solid ${theme.palette.primary.main}22`,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.035)"
                    : "rgba(0,0,0,0.025)",
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <CodeIcon color="primary" />
                <Typography variant="subtitle2" color="text.secondary">
                  Desarrollo constante
                </Typography>
              </Stack>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                px: 2.5,
                py: 1.5,
                borderRadius: "999px",
                border: `1px solid ${theme.palette.primary.main}22`,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.035)"
                    : "rgba(0,0,0,0.025)",
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <CalendarMonthIcon color="primary" />
                <Typography variant="subtitle2" color="text.secondary">
                  Iteración sobre productos reales
                </Typography>
              </Stack>
            </Paper>

            <Paper
              elevation={0}
              sx={{
                px: 2.5,
                py: 1.5,
                borderRadius: "999px",
                border: `1px solid ${theme.palette.primary.main}22`,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.035)"
                    : "rgba(0,0,0,0.025)",
              }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <AutoGraphRoundedIcon color="primary" />
                <Typography variant="subtitle2" color="text.secondary">
                  Mejora continua
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Fade>

        <Typography
          variant="caption"
          color="text.secondary"
          textAlign="center"
          sx={{
            maxWidth: 680,
            lineHeight: 1.6,
            fontSize: "1.5rem",
          }}
        >
          * Algunas contribuciones privadas pueden no mostrarse en este gráfico
          por configuración de privacidad de GitHub.
        </Typography>
      </Stack>
    </Box>
  );
}
