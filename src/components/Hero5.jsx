import React from "react";
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Fade,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";

export default function Hero5() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const values = [
    {
      icon: <PsychologyRoundedIcon color="primary" />,
      title: "Aprendizaje autodidacta",
      description:
        "Formación práctica basada en construir, equivocarme, corregir y llevar proyectos reales a producción.",
    },
    {
      icon: <AutoFixHighRoundedIcon color="primary" />,
      title: "Resolución pragmática",
      description:
        "Me enfoco en encontrar soluciones útiles, sostenibles y alineadas al problema real del negocio.",
    },
    {
      icon: <AccountTreeRoundedIcon color="primary" />,
      title: "Orden en la complejidad",
      description:
        "Disfruto transformar procesos desordenados en flujos claros, mantenibles y escalables.",
    },
    {
      icon: <GroupsRoundedIcon color="primary" />,
      title: "Comunicación con negocio",
      description:
        "Puedo traducir necesidades no técnicas en decisiones de producto, arquitectura y desarrollo.",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        scrollSnapAlign: "start",
        py: { xs: 7, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 10 },
        display: "flex",
        alignItems: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          left: -140,
          bottom: -120,
          background: `${theme.palette.primary.main}14`,
          filter: "blur(18px)",
          pointerEvents: "none",
        },
      }}
    >
      <Grid
        container
        spacing={{ xs: 5, md: 6 }}
        alignItems="center"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Grid item xs={12} md={7}>
          <Fade in timeout={1000}>
            <Box>
              <Chip
                label="Perfil técnico con visión de producto"
                color="primary"
                sx={{
                  mb: 2,
                  fontWeight: 700,
                }}
              />

              <Typography
                variant={isMobile ? "h4" : "h3"}
                fontWeight="bold"
                color="primary"
                gutterBottom
                sx={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  lineHeight: 1.1,
                }}
              >
                Trayectoria, criterio y forma de trabajo
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.08rem" },
                  mb: 3,
                  lineHeight: 1.8,
                  maxWidth: 820,
                }}
              >
                Mi recorrido se construyó desde la práctica: empecé aprendiendo
                de forma autodidacta y con el tiempo pasé de prototipos a
                sistemas reales en producción. Hoy mi fortaleza está en conectar
                desarrollo full stack, producto y operación para resolver
                problemas concretos de negocio.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.08rem" },
                  mb: 4,
                  lineHeight: 1.8,
                  maxWidth: 820,
                }}
              >
                No me interesa construir software aislado de la realidad del
                usuario. Me enfoco en entender procesos, ordenar prioridades,
                detectar puntos de fricción y convertirlos en soluciones
                mantenibles. Esa combinación entre criterio técnico y mirada
                operativa es lo que más valor puedo aportar en equipos que están
                creciendo.
              </Typography>

              <Grid container spacing={2}>
                {values.map((item) => (
                  <Grid item xs={12} sm={6} key={item.title}>
                    <Paper
                      elevation={0}
                      sx={{
                        height: "100%",
                        p: 2.2,
                        borderRadius: 3,
                        border: `1px solid ${theme.palette.primary.main}18`,
                        backgroundColor:
                          theme.palette.mode === "dark"
                            ? "rgba(255,255,255,0.025)"
                            : "rgba(0,0,0,0.018)",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1.5}
                        alignItems="flex-start"
                      >
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: `${theme.palette.primary.main}12`,
                            flexShrink: 0,
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Box>
                          <Typography variant="body1" fontWeight={700}>
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 0.5, lineHeight: 1.6 }}
                          >
                            {item.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Grid>

        <Grid item xs={12} md={5}>
          <Fade in timeout={1200}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: 4,
                backdropFilter: "blur(8px)",
                background:
                  theme.palette.mode === "dark" ? "#ffffff0a" : "#00000005",
                border: `1px solid ${theme.palette.primary.main}33`,
                boxShadow: `0 0 22px ${theme.palette.primary.main}22`,
              }}
            >
              <FormatQuoteIcon
                sx={{
                  fontSize: 42,
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              />

              <Typography
                variant="body1"
                color="text.primary"
                fontStyle="italic"
                sx={{
                  fontSize: { xs: "1.02rem", sm: "1.12rem" },
                  lineHeight: 1.8,
                }}
              >
                “Gianfranco no solo desarrolla: entiende el problema, ordena el
                proceso y propone soluciones que simplifican la operación
                diaria. Su mayor aporte está en convertir necesidades complejas
                en sistemas claros y funcionales.”
              </Typography>

              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  mt: 2.5,
                  textAlign: "right",
                  fontStyle: "normal",
                  fontWeight: 600,
                }}
              >
                — Feedback de cliente/proyecto
              </Typography>
            </Paper>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
}
