import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

import pdf from "../cv/Gianfranco_Montivero_CV.pdf";
import { profile } from "../data/portfolioData";

const initialForm = { name: "", email: "", company: "", message: "" };

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Contacto desde portfolio${formData.company ? ` — ${formData.company}` : ""}`;
    const body = [
      `Nombre: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.company ? `Empresa: ${formData.company}` : null,
      "",
      formData.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch (error) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Box component="main" sx={{ pt: { xs: 13, md: 15 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Button component={Link} to="/" startIcon={<ArrowBackRoundedIcon />} sx={{ mb: 3, px: 0 }}>
          Volver al inicio
        </Button>

        <Grid container spacing={{ xs: 5, md: 7 }} alignItems="flex-start">
          <Grid item xs={12} md={5}>
            <Typography color="primary.main" fontWeight={800} variant="overline">
              Contacto laboral
            </Typography>
            <Typography component="h1" variant="h2" sx={{ mt: 1, fontSize: { xs: "2.5rem", md: "3.8rem" } }}>
              Conversemos sobre el puesto y el problema a resolver.
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2.5, lineHeight: 1.75, fontSize: "1.08rem" }}>
              Estoy disponible para procesos de selección Full Stack JavaScript, Frontend React o Backend Node.js.
              Puedo ampliar decisiones técnicas, proyectos y responsabilidades en una entrevista.
            </Typography>

            <Paper variant="outlined" sx={{ p: 3, mt: 4, borderColor: "rgba(255,255,255,0.09)" }}>
              <Typography variant="body2" color="text.secondary">
                Email
              </Typography>
              <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1} mt={0.5}>
                <Typography fontWeight={700} sx={{ overflowWrap: "anywhere" }}>
                  {profile.email}
                </Typography>
                <Tooltip title="Copiar email">
                  <IconButton onClick={copyEmail} color="primary" aria-label="Copiar email">
                    <ContentCopyRoundedIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {profile.location}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {profile.availability}
              </Typography>
            </Paper>

            <Stack direction="row" spacing={1} mt={2}>
              <Tooltip title="WhatsApp">
                <IconButton href={profile.whatsapp} target="_blank" rel="noopener noreferrer" color="primary">
                  <WhatsAppIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton href={profile.linkedin} target="_blank" rel="noopener noreferrer" color="primary">
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton href={profile.github} target="_blank" rel="noopener noreferrer" color="primary">
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Stack>

            <Button
              href={pdf}
              download="Gianfranco_Montivero_CV.pdf"
              variant="outlined"
              startIcon={<DownloadRoundedIcon />}
              sx={{ mt: 2.5 }}
            >
              Descargar CV
            </Button>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper component="form" onSubmit={handleSubmit} sx={{ p: { xs: 3, sm: 4 } }}>
              <Typography variant="h5" fontWeight={800}>
                Preparar un correo
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
                Al enviar se abrirá tu aplicación de correo con la información completada. Ningún dato se guarda en este sitio.
              </Typography>

              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Empresa o proyecto"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    fullWidth
                    multiline
                    minRows={6}
                  />
                </Grid>
              </Grid>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} mt={3}>
                <Button type="submit" variant="contained" startIcon={<SendRoundedIcon />}>
                  Abrir correo
                </Button>
                <Button href={`mailto:${profile.email}`} variant="text" startIcon={<EmailOutlinedIcon />}>
                  Escribir directamente
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={copied} autoHideDuration={2500} onClose={() => setCopied(false)}>
        <Alert severity="success" variant="filled" onClose={() => setCopied(false)}>
          Email copiado
        </Alert>
      </Snackbar>
    </Box>
  );
}
