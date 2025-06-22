import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Stack,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contacto() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://www.api.ubika.site/api/portfoliocontact",
        formData
      );
      alert("Mensaje enviado con éxito 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      alert("Ocurrió un error al enviar el mensaje. Intentalo más tarde.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        scrollSnapAlign: "start",
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 8, sm: 12 },
        bgcolor: theme.palette.background.default,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              fontWeight="bold"
              color="primary"
            >
              Hablemos de tu próximo proyecto
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600 }}
            >
              Ya sea que necesites una web para tu negocio, integrar sistemas,
              automatizar procesos o lanzar tu primera idea digital, estoy listo
              para ayudarte a hacerlo real. Dejá tu mensaje y te respondo lo
              antes posible.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Tooltip title="WhatsApp">
                <IconButton
                  color="primary"
                  href="https://wa.me/542604206967"
                  target="_blank"
                >
                  <WhatsAppIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email">
                <IconButton
                  color="primary"
                  href="mailto:montiverogianfranco2709@gmail.com"
                >
                  <EmailIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  color="primary"
                  href="https://www.linkedin.com/in/gianfranco-montivero-37058821b/"
                  target="_blank"
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton
                  color="primary"
                  href="https://github.com/GianfrancoMontiveroOK"
                  target="_blank"
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Stack>

            <Typography variant="body2" color="text.secondary" mt={2}>
              Email: montiverogianfranco2709@gmail.com <br />
              Ubicación: Argentina – disponible para trabajar de forma remota.
            </Typography>
          </Stack>
        </Grid>

        {/* FORMULARIO */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              backdropFilter: "blur(6px)",
              background:
                theme.palette.mode === "dark"
                  ? "#ffffff08"
                  : "rgba(255,255,255,0.7)",
              boxShadow: `0 0 25px ${theme.palette.primary.main}22`,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  label="Tu nombre"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  label="Tu correo"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                />
                <TextField
                  label="Mensaje"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  required
                  multiline
                  rows={4}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ borderRadius: "30px", fontWeight: 600 }}
                >
                  Enviar mensaje
                </Button>
              </Stack>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
