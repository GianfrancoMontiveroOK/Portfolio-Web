import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Hero6() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "80vh",
        bgcolor: theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 4,
        py: 10,
        scrollSnapAlign: "start",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Stack spacing={4} alignItems="center" textAlign="center">
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          color="primary"
        >
          ¿Querés que construya la próxima plataforma que potencie tu negocio?
        </Typography>

        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={2}
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            href="https://wa.me/542604206967"
            target="_blank"
            startIcon={<WhatsAppIcon />}
            sx={{ px: 4, py: 1.5, borderRadius: "30px", fontWeight: 600 }}
          >
            Contratarme
          </Button>

          <Button
            variant="outlined"
            color="primary"
            href="mailto:montiverogianfranco2709@gmail.com"
            startIcon={<EmailIcon />}
            sx={{ px: 4, py: 1.5, borderRadius: "30px", fontWeight: 600 }}
          >
            Enviar Email
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Tooltip title="GitHub">
            <IconButton
              color="primary"
              href="https://github.com/GianfrancoMontiveroOK"
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
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
        </Stack>

        <Typography variant="body2" color="text.secondary">
          Email: montiverogianfranco2709@gmail.com · Ubicación: Argentina ·
          GitHub activo
        </Typography>

        
      </Stack>
    </Box>
  );
}
